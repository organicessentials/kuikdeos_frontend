import React, { useEffect, useRef } from 'react';
import arrow_view from "../assets/arrow_view.svg";
import { Link, useNavigate } from 'react-router-dom';
import { productsFetch } from '../features/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Shop = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentPageRef = useRef(1);
    
    const { items: products, loading } = useSelector((state) => state.products);
    console.log(products);

    useEffect(() => {
        dispatch(productsFetch());
    }, [dispatch]);

    const handleScroll = () => {
        const scrollThreshold = document.documentElement.scrollHeight - window.innerHeight - 200;
        if (window.scrollY > scrollThreshold && !loading) {
            currentPageRef.current += 1;
            dispatch(productsFetch(currentPageRef.current));
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    });

    const nextPage = (doc) => {
        navigate(`/product/${doc.slug}`, { state: doc });
    }

    return (
        <>
              <div className="bredcrum_org">
        <div className="container_banner">
          <h1>Shop</h1>

          <span className="bredcurn_link"><a class="bread-crumb-e" href="https://kuikdose.io">Home</a> / <span class="bread-crumb-e">Shop</span></span>
        </div>
      </div>
      <div className="container_banner">
      <div className="products">
          {products.map((doc) => (
              <Link to={`/product/${doc.slug}`} key={doc._id} onClick={() => nextPage(doc)} className="pro_details">
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
              </Link>
            ))}
        </div>
            </div>
        </>
    );
}

export default Shop;
