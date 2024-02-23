import React, { useEffect } from "react";
import off from "../assets/off.svg";
import affiliate from "../assets/affiliate.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { decodeToken } from "react-jwt";
import {Helmet} from "react-helmet";

const Affiliate = () => {
  const {user:item} = useSelector((state)=>state.user)
  const user = decodeToken(item)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (user?.role === "Admin User") {
      navigate('/affiliate-urls/')
    }else{
      navigate('/affiliate-center')
    }
  }, [user])

  return (
    <div>
        <Helmet>
        <title>Affiliate Center - Kuikdose</title>
        <meta name="description" content="" />
    </Helmet>

    <div className="bredcrum_org">
        <div className="container_banner">
          <h1>Affiliate Center</h1>

          <span className="bredcurn_link"><a class="bread-crumb-e" href="https://kuikdose.io">Home</a> / <span class="bread-crumb-e">Affiliate Center</span></span>
        </div>
      </div>
      <div className="affili_sec">
        <div className="container_banner">
            <div className="affili_deat">
                <div className="affilia_cont1">
                <h2>Earn 30% To 55% In Each Sale!</h2>
                <span>When any sale is made using your link, you will receive a 30% to 55% commission!</span>
                </div>
                <div className="affilia_cont1 affi2">
                <h2>Highest Conversion Rate!</h2>
                <span>We have the highest conversion rate in the industry. We definitely mean it!</span>
               
                </div>
                <div className="affilia_cont1">
                <h2>Weekly Payout!</h2>
                <span>We payout every week on Friday’s so you don’t have to wait for a month to receive what you have earned!</span>
                <span>Queries? <a href="mailto:support@kuikdose.io">support@kuikdose.io</a></span>
                </div>
            </div>

            <div className="table_affil">
            <h2>Affiliate Commissions Table:</h2>
            <table className="tabel_aff">
    <thead>
        <tr>
            <td>Total Earnings</td>
            <td>Commission Rate</td>
            <td>Avg Number of Refferals</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>$0 – $9,999</td>
            <td>30%</td>
            <td>1</td>
        </tr>
        <tr>
            <td>$10,000 – $24,999</td>
            <td>31%</td>
            <td>123</td>
        </tr>
        <tr>
            <td>$25,000 – $49,999</td>
            <td>32%</td>
            <td>297</td>
        </tr>
        <tr>
            <td>$50,000 – $99,999</td>
            <td>33%</td>
            <td>574</td>
        </tr>
        <tr>
            <td>$100,000 – $249,999</td>
            <td>34%</td>
            <td>1,111</td>
        </tr>
        <tr>
            <td>$250,000 – $499,999</td>
            <td>35%</td>
            <td>2,380</td>
        </tr>
        <tr>
            <td>$500,000 – $999,999</td>
            <td>36%</td>
            <td>4,166</td>
        </tr>
        <tr>
            <td>$10,000,000 – $2,499,999</td>
            <td>45%</td>
            <td>83,000</td>
        </tr>
        <tr>
            <td>$25,000,000+</td>
            <td>55%</td>
            <td>150,000</td>
        </tr>
    </tbody>
</table>

            </div>
            <div className="benifits_aff">
          <h2>Benefits:</h2>
          <ul>
 	<li> Lifetime cookie tracking increases commissions from returning customers;</li>
 	<li> Customer Lifetime Value over $1000;</li>
 	<li>The more you earn, the more you get! No limits!</li>
 	<li> No one can offer: Your commissions are unaffected by refunds or chargebacks!</li>
</ul>
            </div>

            <div className="affili_regster"> 
                <h2>Join Our Affiliate Program Now!</h2>
                <span>It’s free and only takes less than a minute!</span>
                <Link to="/affiliate-area">Apply Now</Link>
            </div> 

            <div className="affili_regster login_affi"> 
                <h2>Affiliate power awaits! Login for instant rewards</h2>
                <Link to="/affiliate-area">Login</Link>
            </div> 
        </div>
         
    </div>
    </div>
  );
};

export default Affiliate;
