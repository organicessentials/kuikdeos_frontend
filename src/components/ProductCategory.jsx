import React, { useEffect, useState } from 'react';
import arrow_view from "../assets/arrow_view.svg";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { productsFetch } from '../features/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import {Helmet} from "react-helmet";
import config from '../config';
import axios from 'axios';
const ProductCategory = () => {
  const navigate = useNavigate();
  const { params } = useParams();
  const [products, setProducts] = useState([])

  console.log(products);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);



  const words = params.split('-');
  const capitalizedParams = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  console.log(capitalizedParams);

  useEffect(() => {
    const catdata =async () => {
      try {
        const result = await axios.get(`${config}/api/auth/show/products/${capitalizedParams}`)
        console.log(result);
        setProducts(result.data)
      } catch (error) {
        
      }
    }
    catdata()
  }, [capitalizedParams])
  

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const nextPage = (doc) => {
    navigate(`/product/${doc.slug}`, { state: doc });
  };

  return (
    <>
     <Helmet>
        <title>{capitalizedParams} - Kuikdose</title>
    </Helmet>
     
      <div className="bredcrum_org">
        <div className="container_banner">
          <h1>Category: {capitalizedParams}</h1>

          <span className="bredcurn_link"><a class="bread-crumb-e" href="https://kuikdose.io">Home</a> / <span class="bread-crumb-e">{capitalizedParams}</span></span>
        </div>
      </div>
      <div className='container_sec'>
        <div className="products">
          {products.map((doc) => (
              <div key={doc._id} onClick={() => nextPage(doc)} className="pro_details">
                <div className="pro_img">
                  <img src={doc.image} alt={doc.name} />
               
                </div>
                <div className="p_det">
                  <span className="p_titl">
                    {doc.name}
                  </span>
                  <span className="p_price">
                    
                      <h4>
                        {formatter.format(doc.firstVariantPrice)} –
                        {formatter.format(
                          doc.lastVariantPrice
                        )}
                      </h4>
                 
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
