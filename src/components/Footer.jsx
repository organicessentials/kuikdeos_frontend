import React from "react";
import footer_logo from "../assets/logo_foter.svg";
import payment_kd from "../assets/payment_kd.png";
import badge_tmr from "../assets/badge_tmr.svg";


import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div class="badge_kd">
	<a href="https://techmorereview.com/companies/kuikdose/">
	<img src={badge_tmr} /></a>
</div>
      <div className="footer">
        <div className="container_foot">
          <div className="foot_left">
           
            <div className="leftfoo_list">
                <div className="list_footer2 logo_confooter">
                    <img src={footer_logo} />
                    <span>Your health, both physical and emotional, holds great significance for us. We stand by your side and have taken steps to make it even easier for you to access essential products at the pharmacy.</span>
                </div>
                <div className="list_footer2">
                <span className="list-title">KUIKDOSE</span>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/faqs">Help Center</Link></li>
                    <li><Link to="/affiliate-center">Store Affiliates</Link> </li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                  </ul>
                </div>
                <div className="list_footer2">
                <span className="list-title">INFORMATION</span>
                <ul>
                    <li><Link to="/privacy-policy">Confidentiality Guidelines</Link></li>
                    <li><Link to="/guarantee">Assurance</Link></li>
                    <li><Link to="/shipping-payment">Shipment Information</Link></li>
                    <li><Link to="/terms-conditions">Terms of Use</Link> </li>
                  </ul>
                </div>
                
            </div>
          </div>
         
          <div className="copytext">
          <span>Copyright 2024, kuikdose.io</span>
          <img src={payment_kd} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
