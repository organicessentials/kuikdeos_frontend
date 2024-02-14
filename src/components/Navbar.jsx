import React, { useEffect, useState } from "react";

import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decodeToken } from "react-jwt";
import { logout } from "../features/userSlice";
import axios from "axios";
import config from "../config";
import Badge from "@mui/material/Badge";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SearchIcon from "@mui/icons-material/Search";
import { getTotals } from "../features/cartSlice";
import menu from "../assets/menu.svg";

import cardio from "../assets/cardio.svg";
import cardic from "../assets/cardic.svg";
import brain from "../assets/brain.svg";
import ani from "../assets/ani.svg";
import cough from "../assets/cough.svg";
import dib from "../assets/dib.svg";
import diet from "../assets/diet.svg";
import women from "../assets/women.svg";
import tea from "../assets/tea.svg";
import stre from "../assets/stre.svg";
import skin from "../assets/skin.svg";
import penis from "../assets/penis.svg";
import pain from "../assets/pain.svg";
import oral from "../assets/oral.svg";
import meta from "../assets/meta.svg";
import meno from "../assets/meno.svg";
import mens from "../assets/mens.svg";
import liver from "../assets/liver.svg";
import joint from "../assets/joint.svg";
import immu from "../assets/immu.svg";
import heart from "../assets/heart.svg";
import heair from "../assets/heair.svg";
import digest from "../assets/digest.svg";
import suge from "../assets/suge.svg";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: item } = useSelector((state) => state.user);
  const { items: products } = useSelector((state) => state.products);
  const [searchInput, setSearchInput] = useState("");

  const user = decodeToken(item);

  const cart = useSelector((state) => state.cart);
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const showCart = () => {
    navigate("/cart");
  };

  const userLogout = async () => {
    try {
      await axios.post(`${config}/api/auth/logout`);
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
  };

  return (
    <>
      <div className="header">
        <span>Enjoy a special welcome offer! Get 5% off your first purchase using code: TRYUS | Free shipping on orders over USD 150.</span>      
      </div>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
          <img src={logo} alt="Kuikdose" style={{ width: 231 }} />
          </Link>
        </div>
        <div className="menu">
          <h1 onClick={() => setShow(!show)}>
            <img src={menu} />
          </h1>
        </div>
        <div className="nav_link">
          <div className="vector">
            <div className="link">
              <ul className={!show ? "not_show" : "show_show"}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li className="dropdown">
                  <Link>Store</Link>
                  <ul class="dropdown-content shop_menu">
                    <li>
                      <Link to="/product-category/Antioxidant">
                        <img src={ani} />
                        <span>Antioxidant</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Brain%20Health">
                        <img src={brain} />
                        <span>Brain Health</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="product-category/Cardiac%20Support">
                        <img src={cardic} />
                        <span>Cardiac Support</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Cardiovascular%20Support">
                        <img src={cardio} />
                        <span>Cardiovascular Support</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Cough">
                        <img src={cough} />
                        <span>Cough & Cold</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Diabetes">
                        <img src={dib} />
                        <span>Diabetes</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/product-category/Dietary%20Support">
                        <img src={diet} />
                        <span>Dietary Support</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Digestive%20Health">
                        <img src={digest} />
                        <span>Digestive Health</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Hair%20Care">
                        <img src={heair} />
                        <span>Hair Care</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Heart%20Health">
                        <img src={heart} />
                        <span>Heart Health</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Immunity">
                        <img src={immu} />
                        <span>Immunity</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Joint%20Health">
                        <img src={joint} />
                        <span>Joint Health</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Liver%20Health">
                        <img src={liver} />
                        <span>Liver Health</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Men’s%20Health">
                        <img src={mens} />
                        <span>Men's Health</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Menopause%20Support">
                        <img src={meno} />
                        <span>Menopause Support</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Metabolic%20Wellness">
                        <img src={meta} />
                        <span>Metabolic Wellness</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Oral%20Health">
                        <img src={oral} />
                        <span>Oral Health</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Pain">
                        <img src={pain} />
                        <span>Pain</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Penis%20Enlargement">
                        <img src={penis} />
                        <span>Penis Enlargement</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Skin%20Care">
                        <img src={skin} />
                        <span>Skin & Acne Care</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Stress">
                        <img src={stre} />
                        <span>Stress</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Sugar%20Metabolism">
                      <img src={suge} />
                        <span>Sugar Metabolism</span>
                      </Link>
                    </li>
                    
                    <li>
                      <Link to="/product-category/Teas">
                        <img src={tea} />
                        <span>Teas</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category/Women’s%20Health">
                        <img src={women} />
                        <span>Womens Health</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/faqs">Help Center</Link>
                </li>
                <li>
                  <Link to="/shipping-payment">Shipment Information</Link>
                </li>
                <li>
                  <Link to="/track-order">Track Order</Link>
                </li>
                
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                {!user?.role ? (
                  <li>
                    <Link to="/login">Login / Register</Link>
                  </li>
                ) : (
                  <li className="dropdown">
                    <Link to="my-account"> My Account</Link>
                    <ul class="dropdown-content">
                      <li>
                        <Link to="/my-account/orders">Orders</Link>
                      </li>
                      <li>
                        <Link to="/my-account/downloads">Downloads</Link>
                      </li>
                      <li>
                        <Link to="/my-account/edit-address">Addresses</Link>
                      </li>
                      <li>
                        <Link to="/my-account/add-payment-method">
                          Payment Methods
                        </Link>
                      </li>
                      <li>
                        <Link to="/my-account/edit-account/">
                          Account Details
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/my-account/add-payment-method">Wishlist</Link>
                      </li> */}

                      <li>
                        <Link onClick={userLogout}>Logout</Link>
                      </li>
                    </ul>
                  </li>
                )}
                <span className="ver_line"></span>
                <li onClick={showCart}>
                  <Badge badgeContent={cart.cartTotalQuantity} color="success">
                    <ShoppingCartCheckoutIcon />
                  </Badge>
                </li>
                <span className="ver_line"></span>
                <li className="se_icon">
                  <SearchIcon />

                  <div className="search">
                    <div className="search_bars">
                      <input
                        placeholder="Search Products..."
                        type="text"
                        value={searchInput}
                        onChange={handleInputChange}
                      />
                      <div className="icon_se">
                        <SearchIcon />
                      </div>
                    </div>

                    <div className="search_pan">
                      {searchInput !== "" && (
                        <div>
                          {products
                            .filter(
                              (doc) =>
                                doc.name
                                  ?.toLowerCase()
                                  .indexOf(searchInput.toLowerCase()) !== -1
                            )
                            .slice(0, 5)
                            .map((product) => (
                              <div className="se_results">
                                <Link
                                  to={`/product/${product.slug}`}
                                  key={product.id}
                                >
                                  {product.name}
                                </Link>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
