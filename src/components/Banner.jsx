import React from "react";
import skin_car from "../assets/skin_car.png";
import Frame from "../assets/Frame-83631.png";
import Frame2 from "../assets/Frame-83641.png";
import Frame3 from "../assets/Frame-83651.png";
import ser_1 from "../assets/ser_1.svg";
import ser_2 from "../assets/ser_2.svg";
import ser_3 from "../assets/ser_3.svg";
import ser_4 from "../assets/ser_4.svg";
import ser_5 from "../assets/ser_5.svg";
import ser_6 from "../assets/ser_6.svg";
import EastIcon from '@mui/icons-material/East';

import "./Banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
    <div className="banner_kd">
      <div className="container_banner" >
      <h2>Skin Care</h2>  
      <div className="columns_banner"> 
        <div className="cloumn_flex content_ban">
            <span>Prescription Only Medicine</span>
            <h3>Unlock Radiance: Essential Vitamins and Minerals for Skin Health</h3>
            <Link to="/product-category/skin-care/" className="shop_bann">Shop Now <EastIcon /></Link>
        </div>
        <div className="cloumn_flex content_image">
            <img src={skin_car} />
        </div>
        <div className="cloumn_flex content_produ">
            <div className="product_sect_ban">
                <div className="prodct_img">
                    <img src={Frame} />
                </div>  
                <div className="pr_names"> 
                <h4><Link to="/product/a-ret-gel-tretinoin">A Ret Gel</Link></h4>
                  <span>Enhanced Skin Health: A Ret Gel with Extra Nutrient Boost</span>
                </div>
            </div>
            <div className="product_sect_ban">
                <div className="prodct_img">
                    <img src={Frame2} />
                </div>  
                <div className="pr_names"> 
                <h4><Link to="/product/bimat-3-ml-0.03">Bimat 3 ml</Link></h4>
                  <span>Enhancing Nutrient Intake: Boosting Vitamins and Minerals with Bimat 3ml</span>
                </div>
            </div>
            <div className="product_sect_ban">
                <div className="prodct_img">
                    <img src={Frame3} />
                </div>  
                <div className="pr_names"> 
                <h4><Link to="/product/melalite-forte-4-percent-30-gm-cream">Melalite Forte</Link></h4>
                  <span>Enhancing Nutrient Intake: The Power of Melalite Forte</span>
                </div>
            </div>
        </div>
      </div>
     
      </div>
    </div>  
    <div className="container_banner" >
    <div className="service_kd">
        <div className="ser_1">
          <div className="ser_img">
          <img src={ser_1} />
          </div>
          <div className="ser_head">
            <h3>Prescription Only Medicine</h3>
          </div>
        </div>
        <div className="ser_1">
          <div className="ser_img">
          <img src={ser_2} />
          </div>
          <div className="ser_head">
            <h3>Exclusively FDA-Approved Medications</h3>
          </div>
        </div>
        <div className="ser_1">
          <div className="ser_img">
          <img src={ser_3} />
          </div>
          <div className="ser_head">
            <h3>Secure and Convenient Purchase! </h3>
          </div>
        </div>
        <div className="ser_1">
          <div className="ser_img">
          <img src={ser_4} />
          </div>
          <div className="ser_head">
            <h3>Customer Happiness Ensured</h3>
          </div>
        </div>
        <div className="ser_1">
          <div className="ser_img">
          <img src={ser_5} />
          </div>
          <div className="ser_head">
            <h3>Worldwide Best Prices</h3>
          </div>
        </div>
        <div className="ser_1">
          <div className="ser_img">
          <img src={ser_6} />
          </div>
          <div className="ser_head">
            <h3>Premium Delivery</h3>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Banner;
