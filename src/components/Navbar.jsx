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
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Navbar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: item } = useSelector((state) => state.user);
  const { items: products } = useSelector((state) => state.products);
  const [searchInput, setSearchInput] = useState("");

  const user = decodeToken(item);

  const cart = useSelector((state) => state.cart);
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    const getCategories = async() => {
      try {
        const result = await axios.get(`${config}/api/auth/show/category`)
        setCategories(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCategories()
  }, [])
  

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
                  <ul class="dropdown-content">
                    {categories.map((doc)=>(
                      <li>
                      <ArrowRightIcon />
                      <a href={`/product-category/${doc.slug}`}>
                        <span>{doc.name}</span>
                      </a>
                    </li>
                    ))}
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
                      {/* <li>
                        <Link to="/my-account/downloads">Downloads</Link>
                      </li> */}
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
