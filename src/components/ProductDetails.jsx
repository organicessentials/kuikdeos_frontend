import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { addToCart, decrementCart, incrementCart } from "../features/cartSlice";
import Tab from "./Tab";
import Toast from "./Toast";
import axios from "axios";
import config from "../config";
import { Helmet } from "react-helmet";
import gifLoader from "../assets/loader.gif";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [preLoader, setPreLoader] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [product, setProduct] = useState("");
  const [visibleTop, setVisibleTop] = useState(true);
  const [num, setNum] = useState(0);
  const cart = useSelector((state) => state.cart);
  const [varian, setVarian] = useState("");
  const [showVariantPrice, setShowVariantPrice] = useState("");
  console.log(product);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    getData();
  }, [params?.id]);

  const getData = async () => {
    try {
      const result = await axios.get(
        `${config}/api/auth/show/product/${params?.id}`
      );
      setProduct(result.data);
      setPreLoader(false);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        navigate("/404"); // Redirect to your custom 404 page
      } else {
        console.log(error);
        // Handle other errors if needed
      }
    }
  };

  const selectVariant = (e) => {
    setVarian(e.target.value);
  };

  const showPrice = product.variants?.find(
    (doc) => doc.attributeValue === varian
  );

  let price = showVariantPrice? showVariantPrice:showPrice?.price

  const addProduct = () => {
    let newItem = {
      name: product.name,
      price: price ? price : product.variants[0].price,
      id: product._id,
      image: product.image,
    };
    dispatch(addToCart(newItem));
    Toast({ title: "Add Cart", type: "success" });
  };

  const increment = () => {
    dispatch(incrementCart(product));
  };

  const decrement = () => {
    dispatch(decrementCart(product));
  };

  const buyProduct = () => {
    let newItem = {
      name: product.name,
      price: price ? price: product.variants[0].price,
      id: product._id,
      image: product.image,
    };
    dispatch(addToCart(newItem));
    navigate("/cart");
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  const handleDropdownChange = (e) => {
    const newIndex = parseInt(e.target.value, 10);
    setActiveIndex(newIndex);
  };
  const handelChange = (e) => {
    setShowVariantPrice(e.target.value);
    // setVisibleTop(true);
  };

  if (preLoader) {
    return (
      <div className="loading_layout">
        <img style={{width:"60px",height:"60px"}} src={gifLoader} className="preloader" alt="logo" />
      </div>
    );
  }

  return (
    <>
      <div>
        <Helmet>
          <title>{product.seoTitle ? product.seoTitle : product.name}</title>
          <meta name="description" content={product.seoDescription} />
        </Helmet>
        <div className="bredcrum_org">
          <div className="container_banner">
            <h1>Product</h1>

            <span className="bredcurn_link">
              <a class="bread-crumb-e" href="/">
                Home
              </a>{" "}
              /{" "}
              <span class="bread-crumb-e">
                <Link to={`/product-category/${product?.category[0].name}`}>
                  {product?.category[0].name}
                </Link>
              </span>{" "}
              /<span class="bread-crumb-e">{product?.name}</span>
            </span>
          </div>
        </div>

        <section className="details_page">
          <div className="container_banner">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-cen">
                <div className="product_imag">
                  <img
                    style={{ width: "100%" }}
                    src={product?.image}
                    alt="product_img"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h3 className="product_title ">{product?.name}</h3>
                <h4 className="pro_price">
                  {product?.variants && product.variants[0] && (
                    <h4>
                      {formatter.format(product.variants[0]?.price)} –
                      {formatter.format(
                        product.variants[product.variants.length - 1]?.price
                      )}
                    </h4>
                  )}
                </h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: product?.shortDescription,
                  }}
                ></div>

                <div>
                  <div className="veri-details">
                    <p>{product?.name}</p>
                    <div className="pro_ver">
                      {/* {product?.variants?.map((doc, i) => (
                        <span
                          onClick={() => handelChange(doc, i)}
                          className={
                            i === activeIndex ? "choose active" : "choose"
                          }
                        >
                          {doc.attributeValue}
                        </span>
                      ))} */}
                      <div className="option_co">
                      <label htmlFor="">{product.variants[0].attribute}</label>
                      <select onClick={selectVariant}>
                        <option value="">Choose option</option>
                        {product?.variants
                          ?.map((doc) => doc.attributeValue)
                          ?.filter(
                            (value, index, self) =>
                              self.indexOf(value) === index
                          )
                          ?.map((uniqueValue) => (
                            <option value={uniqueValue} key={uniqueValue}>
                              {uniqueValue}
                            </option>
                          ))}
                      </select>
                      </div>
                      {product.variants[0].variant === "" ? null : (
                        <>
                          <hr />
                          <div className="option_co">
                          <label htmlFor="">
                            {product.variants[0].variant}
                          </label>
                          <select onClick={handelChange} id="">
                            <option value="">Choose option</option>
                            {product?.variants
                              ?.filter((doc) => doc.attributeValue === varian)
                              .map((filteredVariant) => (
                                <option
                                  value={filteredVariant.price}
                                  key={filteredVariant.variantValue}
                                >
                                  {filteredVariant.variantValue}
                                </option>
                              ))}
                          </select>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div>
                    <br />

                    <div className="clear_button">
                      <a onClick={() => setVisibleTop(false)}>CLEAR</a>
                    </div>
                    {product.variants[0].variant === "" ? (
                      <div className="pro_price">
                        {!showPrice?.price
                          ? formatter.format(product.variants[0].price)
                          : formatter.format(showPrice.price)}
                      </div>
                    ) : (
                      <div className="pro_price">
                        {!showVariantPrice
                          ? formatter.format(product.variants[0].price)
                          : formatter.format(showVariantPrice)}
                      </div>
                    )}

                    {/* {visibleTop ? (
                      <div>
                        <div className="show" style={{ fontSize: "16px" }}>
                          {product?.variants &&
                          product.variants[0]?.description ? (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: num
                                  ? num.description
                                  : product.variants[0]?.description,
                              }}
                            />
                          ) : (
                            <p></p>
                          )}
                        </div>

                        <p className="pro_price">
                          {product?.variants && product.variants[0]?.price
                            ? formatter.format(product.variants[0].price)
                            : formatter.format(showVariantPrice)}
                        </p>
                      </div>
                    ) : null} */}
                  </div>
                  <div className="cart_sec">
                    <div className="sec_verii">
                      <button onClick={decrement} className="increment_button">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width=".7em"
                          height=".7em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.52 11.4h-23.040c-0.264 0-0.48 0.216-0.48 0.48v0.24c0 0.264 0.216 0.48 0.48 0.48h23.040c0.264 0 0.48-0.216 0.48-0.48v-0.24c0-0.264-0.216-0.48-0.48-0.48z"></path>
                        </svg>
                      </button>
                      <input
                        value={cart.itemOne.itemCount}
                        className="input_quantity"
                        type="text"
                      />
                      <button onClick={increment} className="increment_button">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width=".7em"
                          height=".7em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.52 11.4h-10.92v-10.92c0-0.264-0.216-0.48-0.48-0.48h-0.24c-0.264 0-0.48 0.216-0.48 0.48v10.92h-10.92c-0.264 0-0.48 0.216-0.48 0.48v0.24c0 0.264 0.216 0.48 0.48 0.48h10.92v10.92c0 0.264 0.216 0.48 0.48 0.48h0.24c0.264 0 0.48-0.216 0.48-0.48v-10.92h10.92c0.264 0 0.48-0.216 0.48-0.48v-0.24c0-0.264-0.216-0.48-0.48-0.48z"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="addt-btn">
                      <button onClick={addProduct} className="add_cart">
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div class="text-center et-or-wrapper">
                    <div>
                      <span>or</span>
                    </div>
                  </div>
                  <div className="by_btn">
                    <button onClick={buyProduct} className="add_btn">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Tab description={product?.description} id={product?._id} />
        </section>
      </div>
    </>
  );
};

export default ProductDetails;
