import React, { useEffect, useState } from "react";
import shop_t from "../assets/shop_now-1.webp";
import arrow_view from "../assets/arrow_view.svg";
import { Link, useNavigate } from "react-router-dom";
import config from "../config";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { productsFetch } from "../features/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items: products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(productsFetch(1));
  }, []);

  // const selectedSlugs = [
  //   "ashwagandha-gold-capsules","ashwagandha-ksm-66-500mg","gotu-kola","gotu-kola-tablets","l-theanine-100mg","l-theanine-200mg","rhodiola-500mg",
  //   "rhodiola-rosea-extract-500","bacopa-brahmi-extract","vitamin-b1","panax-ginseng-extract","mucuna-pruriens-extract","vegetable-capsule","caffeine-l-theanine-2-1",
  //   "l-tyrosine-500mg","lions-mane-mushroom"
  // ];

  const nextPage = (doc) => {
    navigate(`/product/${doc.slug}`);
  };
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <div className="home_view">
      <div className="container_banner">
        <h2 className="pro_secti">FEATURED PRODUCTS</h2>
        <span className="fea_shodes">Our goal is to make pricing as transparent as possible and every essential product affordable.</span>
        <div className="products">
          {products
            .filter((doc, index) => index < 8)
            .map((doc, index) => (
              <div
                key={doc._id}
                onClick={() => nextPage(doc)}
                className="pro_details"
              >
                <div className="pro_img">
                  <img src={doc.image} alt={doc.name} />
                  
                </div>
                <div className="p_det">
                  <span className="p_titl">{doc.name}</span>
                  <span className="p_price">
                    <h4>
                      {formatter.format(doc.firstVariantPrice)} –
                      {formatter.format(doc.lastVariantPrice)}
                    </h4>
                  </span>
                </div>
              </div>
            ))}
        </div>
       
      </div>
    </div>
  );
};

export default Products;
