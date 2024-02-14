import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../config";
import axios from "axios";
import user from "../assets/Frame-8491.jpg";
import user2 from "../assets/Frame-8493.jpg";
import user3 from "../assets/Frame-8490.jpg";
import user4 from "../assets/Frame-8492.jpg";
import star from "../assets/star2.svg";




const Blogs = () => {
  const [post, setPost] = useState([]);


  const getPost = async () => {
    try {
      const result = await axios.get(`${config}/api/auth/show/post`);
      setPost(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="reviews_sec">
      <div className="container_banner">
      <span className="reti_sub">Testimonials</span>
        <h2 class="blog_heading">
        Over 1,000 satisfied customers <br />with a 5-star reviews
        </h2>
        <div className="revies_sec">
            <div className="reviews_sens">
                <div className="reviews_kd">
                  <div className="rev_nae_im">
                        <div className="rev_img">
                          <img src={user} />
                        </div>
                        <div className="name_star">
                            <span>David Jame</span>
                            <img src={star} />
                        </div>
                  </div>
                  <div className="rev_content">
                    <span>Efficient Kuikdose with a wide selection of authentic meds. Easy ordering process and prompt delivery. Trustworthy source for my prescription needs. Will definitely use again and recommend to others. Saved me time and hassle. Impressed with the overall experience. A reliable solution for my healthcare needs.</span>
                  </div>
                </div>
            </div>
            <div className="reviews_sens">
            <div className="reviews_kd rev_kd2">
                  <div className="rev_nae_im">
                        <div className="rev_img">
                          <img src={user2} />
                        </div>
                        <div className="name_star">
                            <span>Jenifer </span>
                            <img src={star} />
                        </div>
                  </div>
                  <div className="rev_content">
                    <span>Kuikdose Pharmacy: Quick, convenient, and reliable. My go-to for hassle-free prescription needs. Highly recommended</span>
                  </div>
                </div>
                <div className="reviews_kd rev_kd2">
                  <div className="rev_nae_im">
                        <div className="rev_img">
                          <img src={user3} />
                        </div>
                        <div className="name_star">
                            <span>Jonah Lee</span>
                            <img src={star} />
                        </div>
                  </div>
                  <div className="rev_content">
                    <span>Reliable online source for meds, fast shipping, and a smooth experience. Trustworthy option for my healthcare needs. Highly recommended for convenience and efficiency.</span>
                  </div>
                </div>
             </div>
             <div className="reviews_sens">
             <div className="reviews_kd">
                  <div className="rev_nae_im">
                        <div className="rev_img">
                          <img src={user4} />
                        </div>
                        <div className="name_star">
                            <span>Rebecca</span>
                            <img src={star} />
                        </div>
                  </div>
                  <div className="rev_content">
                    <span>Kuikdose Pharmacy delivers fast, affordable meds with excellent service. Dependable and easy to use. A lifesaver for my healthcare needs. Highly recommend for online pharmacy shopping</span>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
