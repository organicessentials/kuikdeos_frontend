import React from "react";
import picture from "../assets/Picture.png"
import EastIcon from '@mui/icons-material/East';

const Rating = () => {
  return (
    <>
    <div className="home_about">
      <div className="container_banner">
          <div className="about_flex">
            <div className="about_img">
                <img src={picture} />
            </div>
            <div className="about_content">
            <span className="about_span">ABOUT Kuikdose</span>
            <h2>Your Reliable Partner in Health</h2>
            <p>Welcome to KuikDose, your one-stop destination for all your healthcare needs. At KuikDose, we are passionate about providing you with a seamless online shopping experience for medicines and healthcare products. Our commitment to quality, convenience, and care sets us apart as a trusted online medicine store.</p>
            <a href="">About us <EastIcon /></a>
            </div>
          </div>
      
        </div>
    </div>
    <div className="counter">
    <div className="container_banner">
        <div className="count_sec">
          <div className="count_1">
            <span className="number_cu">14K</span>
            <span>Customers</span>
          </div>
          <div className="count_1">
            <span className="number_cu">37K</span>
            <span>Products Sold</span>
          </div>
          <div className="count_1">
            <span className="number_cu">1+</span>
            <span>Years Experience</span>
          </div>
          <div className="count_1">
            <span className="number_cu">20K</span>
            <span>Happy Customer</span>
          </div>
        </div>
    </div>
  </div>
  </>
  );
};

export default Rating;
