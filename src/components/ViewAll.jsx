import React, { useEffect } from "react";
import brain from "../assets/brain.webp";
import immunity from "../assets/immunity.webp";
import anitioxident from "../assets/anitioxident.png";
import skincare from "../assets/skincare.webp";
import digest from "../assets/digest.webp";
import "./Coll.css"
import { Link } from "react-router-dom";

const ViewAll = () => {

  return (
    <>
    <div className="container_banner">
    <div className="collect_sec colle_1">
        <span className="span_coll">Popular Categories</span>
        <h2>COLLECTIONS</h2>
        <span className="spn_de">Eliminate the hassle of clinic waits, pharmacy lines, and uncomfortable discussions.</span>
        </div>
      <div className="collectin_seci">
       
        <div className="collect_sec colle_2">
       
        <h2><Link to="/product-category/acne-care">Acne Care</Link></h2>
        <span className="spn_an"><Link to="/product-category/acne-care">SEE MORE</Link></span>
        
        </div>
        <div className="collect_sec colle_3">
  
        <h2><Link to="/product-category/skin-care">Beauty and Skin Care</Link></h2>
        <span className="spn_an"><Link to="/product-category/skin-care">SEE MORE</Link></span>

        </div>
        <div className="collect_sec colle_4">
     
        <h2><Link to="/product-category/eye-care">Eye Care</Link></h2>
        <span className="spn_an"><Link to="/product-category/eye-care">SEE MORE</Link></span>

        </div>
        
       
        </div>
    </div>
</>
  );
};

export default ViewAll;
