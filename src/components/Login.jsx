import { faEye, faEyeSlash, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import config from "../config";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/userSlice";
import Alert from "./Alert";
import { decodeToken } from "react-jwt";
import {Helmet} from "react-helmet";
import ReCAPTCHA from "react-google-recaptcha";
axios.defaults.withCredentials = true

const Login = () => {
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false);
    const captchaRef = useRef(null);
    const [show,setShow] = useState(false)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const [message,setMessage] = useState("")
    const { user: item } = useSelector((state) => state.user);
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const user = decodeToken(item);
    

    useEffect(() => {
      if (user) {
        navigate("/my-account")
      }else{
        navigate("/login")
      }
    }, [user])

    //let key = "6Leg_eYoAAAAAFYuuY6s8J3Ufd9CeCtG-ap9z2zn"

    //  live key
     let key = "6LdzFX4pAAAAACaXKNNO8sq4Cka78OnXE7WGiNeG"

     const togglePassword = () => {
        setVisible(!visible);
    };

    const login = async(e)=> {
      e.preventDefault();
      if (!isCaptchaVerified) {
        setMessage({text:"Please solve Captcha correctly",severity:"error"});
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        return;
      }
      try {
        const result = await axios.post(
          `${config}/api/auth/login`,
          { email, password},
          { withCredentials: true } 
        );
        setMessage({text:result.data.message,severity:"success"})
        dispatch(loginUser(result.data.accessToken))
        navigate("/my-account");
      } catch (error) {
        setMessage({text:error.response.data.message,severity:"error"})

      }
    }
    
    const register = async (e) => {
      e.preventDefault();
      if (!isCaptchaVerified) {
        setMessage({text:"Please solve Captcha correctly",severity:"error"});
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        return;
      }
      try {
        const result = await axios.post(
          `${config}/api/auth/register`,
          { email, password, userName: email, },
          { withCredentials: true } 
        );
        setMessage({text:result.data.message,severity:"success"})
        dispatch(registerUser(result.data.accessToken))
        navigate("/my-account");
      } catch (error) {
        console.log(error.response.data.message);
        setMessage({text:error.response.data.message,severity:"error"})
      }
    };
    
    const handleCaptchaVerify = (response) => {
      if (response) {
        setIsCaptchaVerified(true);
      }
    };
  

  return (
    
    <div className="login_container">
        <Helmet>
        <title>Login/Register - Kuikdose</title>
        <meta name="description" content="" />
    </Helmet>
      
      <div className="bredcrum_org">
        <div className="container_banner">
          <h1>My Account</h1>

          <span className="bredcurn_link"><a class="bread-crumb-e" href="https://kuikdose.io">Home</a> / <span class="bread-crumb-e">My Account</span></span>
        </div>
      </div>
      {message?<Alert text={message.text} severity={message.severity}/>:null}
      {!show?<div className="login_bg">
        <div className="login_title">
          <h2>Start Your Journey</h2>
        </div>
        <form onSubmit={register} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email adreess *</label>
            <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type={visible ? 'text' : 'password'}
              required
            />
            {visible ? <span onClick={togglePassword} class="toggle-password_register"><FontAwesomeIcon icon={faEye} /></span>:
            <span onClick={togglePassword} class="toggle-password_register"><FontAwesomeIcon icon={faEyeSlash} /></span> }
          </div>
          <ReCAPTCHA sitekey={key}
           ref={captchaRef}
            onChange={handleCaptchaVerify}
           />
          <button className="btn_btn" type="submit">REGISTER</button>
        </form>
        <div className="navigate">
            <span>Have an account?</span>
            <span><Link onClick={()=>setShow(!show)}> Sign in instead</Link>.</span>
        </div>
      </div>:
      <div className="login_bg">
        <div className="register_title">
          <h2>Sign In To An Existing Account</h2>
        </div>
        <form onSubmit={login} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Username or email address *</label>
            <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
             value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type={visible ? 'text' : 'password'}
              required
            />
            {visible ? <span onClick={togglePassword} class="toggle-password"><FontAwesomeIcon icon={faEye} /></span>:
            <span onClick={togglePassword}class="toggle-password"><FontAwesomeIcon icon={faEyeSlash} /></span> }
          </div>
          <div className="forgot_password">
            <div><input type="checkbox" /><span style={{marginLeft:"12px"}}>Remember me</span></div>
            <div><span><Link style={{color:"white",textDecoration:"none"}} to="/my-account/lost-password">Lost your password?</Link></span></div>
          </div>
          <ReCAPTCHA sitekey={key}
           ref={captchaRef}
            onChange={handleCaptchaVerify}
           />
          <button className="btn_btn" type="submit">LOG IN</button>
        </form>
        <div className="navigate">
            <span>Need to create an account?</span>
            <span><Link onClick={()=>setShow(!show)}> Register here</Link>.</span>
        </div>
      </div>}
      
    </div>
  );
};

export default Login;
