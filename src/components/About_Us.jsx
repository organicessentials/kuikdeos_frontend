import React, { useEffect } from "react";
import abut from "../assets/Picture_abt.jpg";
import abut2 from "../assets/picture-8.jpg";
import about_img from "../assets/about_img.png";
import { Helmet } from "react-helmet";




const About_Us = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - K uikdose</title>
        <meta name="description" content="" />
      </Helmet>
      <div className="bredcrum_org">
        <div className="container_banner">
          <h1>About Us</h1>

          <span className="bredcurn_link"><a class="bread-crumb-e" href="https://kuikdose.io">Home</a> / <span class="bread-crumb-e">About Us</span></span>
        </div>
      </div>
      <div className="abot_sec">
        <div className="container_banner">

          <div className="abot_kd">
            <div className="kd_lo">
              <img src={abut} />
            </div>
            <div className="conte_abt_kd">
              <h2>About KuikDose Online Pharmacy</h2>
              <p>Welcome to KuikDose Online Pharmacy, your trusted destination for convenient and reliable healthcare solutions. At KuikDose, our mission is to provide you with easy access to a wide range of high-quality pharmaceutical products and healthcare services, all from the comfort of your own home.</p><p>At KuikDose, we believe that exceptional customer care is the heart of our service. Our dedicated support team is available to assist you with any questions, concerns, or product inquiries you may have. We strive to provide a personalized experience, ensuring that you feel valued and cared for at every step of your healthcare journey.</p>
            </div>
          </div>
          <div className="abot_kd">
            <div className="conte_abt_kd">
              <h2>Our Commitment to Quality</h2>
              <p>We understand the importance of your health and well-being, which is why we are committed to offering only the best in pharmaceuticals. Our team of experienced pharmacists ensures that every product in our inventory meets stringent quality standards, giving you peace of mind knowing that you’re receiving safe and effective medications.</p>
              <a className="shop_kd" href="#">Shop Now</a>
            </div>
            <div className="kd_lo">
              <img src={abut2} />
            </div>

          </div>


        </div>
      </div>
      <div className="kd_ast_con">
      <div className="container_banner">
        <div className="abot_kd">

          <div className="conte_abt_kd">
            <h2>Our Mission</h2>
            <div class="elbzotech-text-editor text-css-e"><p>At KuikDose Online Pharmacy, our mission is to revolutionize the way you experience healthcare. We’re dedicated to providing a comprehensive, user-friendly, and innovative platform that empowers you to take control of your health, make informed decisions, and lead a healthier, happier life.</p>
              <p>We’re driven by a passion for making healthcare more accessible, convenient, and affordable for everyone. Our mission extends beyond merely delivering medications; it’s about fostering a holistic approach to well-being. We aim to be your trusted partner in every aspect of your health journey.</p>
              <p>We’re committed to:</p>
              <ul>
                <li><strong>Empowering Your Health:</strong> We believe that knowledge is key to better health. Our mission is to provide you with the information, tools, and resources you need to make educated choices about your health, medications, and wellness practices.</li>
                <li><strong>Uncompromising Quality:</strong> Your health is non-negotiable, and we’re unwavering in our commitment to providing you with the highest quality pharmaceutical products, sourced from reputable manufacturers, and thoroughly checked for safety and effectiveness.</li>
                <li><strong>Privacy and Trust:</strong> Your trust is essential to us. We prioritize your privacy and security, ensuring that your personal information is protected, and your healthcare interactions are confidential.</li>
                </ul>
              
                <p>By choosing KuikDose, you’re not only gaining access to a wide range of pharmaceutical products and services; you’re joining a movement to redefine healthcare as a more accessible, informed, and caring experience. Together, we’re working towards a healthier future. Thank you for being a part of this journey with us.</p>
                </div>       
                   </div>
          <div className="kd_lo">
            <img src={about_img} />
          </div>
        </div>
      </div>
      </div>

    </>
  );
};

export default About_Us;
