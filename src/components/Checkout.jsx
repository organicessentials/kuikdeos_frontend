import { Input } from "@mui/base/Input";
import React, { useEffect, useRef, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
import LoadingOverlay from "react-loading-overlay-ts";
import config from "../config";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotals } from "../features/cartSlice";
import { applyCoupon, removeCoupon } from "../features/couponSlice";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet";
import Alert from "./Alert";

let selectedPayment = ["Australia", "United States", "United Kingdom"];

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { coupon } = useSelector((state) => state.coupon);
  const cart = useSelector((state) => state.cart);
  const { user: item } = useSelector((state) => state.user);
  const user = decodeToken(item);
  const [message, setMessage] = useState("");
  const [data, setData] = useState("");
  const [num, setNum] = useState("");
  const [ip, setIp] = useState("");
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  const [show, setShow] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [preLoader, setPreLoader] = useState(false);
  const [countryId, setCountryId] = useState("");
  const [shipping, setShipping] = useState([]);
  const [open, setOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponMessage, setCouponMessage] = useState("");
  const [selectCurrency,setSelectCurrency] = useState("")

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  useEffect(() => {
    axios
      .get("https://ipinfo.io/json?token=8d4b0f40da2957", {
        withCredentials: false,
      })
      .then((response) => {
        setIp(response.data.ip);
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const getAddress = async () => {
      try {
        const res = await axios.get(`${config}/api/auth/billing/${user?.id}`);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAddress();
  }, [user?.id]);

  useEffect(() => {
    const getAddress = async () => {
      try {
        const res = await axios.get(`${config}/api/auth/shipping/${user?.id}`);
        setShipping(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAddress();
  }, [user?.id]);

  useEffect(() => {
    const config = {
      method: "get",
      url: "https://api.countrystatecity.in/v1/countries",
      headers: {
        "X-CSCAPI-KEY":
          "S2x4aDdlaU1wTmdXTDRabm9qTTlaanI5M0M5S0ZXRjZ3WHdUQUdnSA==",
      },
      withCredentials: false,
    };
    axios(config)
      .then(function (response) {
        setSelectedCountry(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const getdata = async () => {
      if (data) {
        const result = await axios.get(
          `https://api.countrystatecity.in/v1/countries/${countryId}/states`,
          {
            headers: {
              "X-CSCAPI-KEY":
                "S2x4aDdlaU1wTmdXTDRabm9qTTlaanI5M0M5S0ZXRjZ3WHdUQUdnSA==",
            },
            withCredentials: false,
          }
        );
        setSelectedState(result.data);
        setPreLoader(true);
        setTimeout(() => {
          setPreLoader(false);
        }, 1000);
      }
    };
    getdata();
  }, [countryId]);

  const renderPaymentAmount = () => {
    let totalAmount = cart.cartTotalAmount;
    if (cart.cartTotalAmount < 150) {
      totalAmount += 15;
    }
    if (num === "paypal") {
      return coupon
        ? totalAmount + (totalAmount * 5) / 100 - coupon.discountedPrice
        : totalAmount + (totalAmount * 5) / 100;
    } else if (num === "btc") {
      return coupon
        ? totalAmount - (totalAmount * 5) / 100 - coupon.discountedPrice
        : totalAmount - (totalAmount * 5) / 100;
    } else {
      return coupon ? totalAmount - coupon.discountedPrice : totalAmount;
    }
  };

  const handleChangeOption = (e) => {
    setNum(e.target.value);
    setPreLoader(true);
    setTimeout(() => {
      setPreLoader(false);
    }, 1000);
  };

  const handleChange = async (event) => {
    setAgreement(event.target.checked);
    let dataToSend = {
      apartment: data?.apartment,
      city: data?.city,
      companyName: data?.companyName,
      country: data?.country,
      createdAt: data?.createdAt,
      email: data?.email,
      firstName: data?.firstName,
      lastName: data?.lastName,
      note: data?.note,
      phone: data?.phone,
      state: data?.state,
      street: data?.street,
      updatedAt: data?.updatedAt,
      userId: user.id,
      zipCode: data?.zipCode,
      _id: data?._id,
    };
    let dataToSendShip = {
      apartment: shipping?.apartment,
      city: shipping?.city,
      companyName: shipping?.companyName,
      country: shipping?.country,
      createdAt: shipping?.createdAt,
      email: shipping?.email,
      firstName: shipping?.firstName,
      lastName: shipping?.lastName,
      note: shipping?.note,
      phone: shipping?.phone,
      state: shipping?.state,
      street: shipping?.street,
      updatedAt: shipping?.updatedAt,
      userId: user.id,
      zipCode: shipping?.zipCode,
      _id: shipping?._id,
    };
    try {
      await axios.put(
        `${config}/api/auth/billing/update/${user.id}`,
        dataToSend
      );
      if (Object.values(dataToSendShip).some((value) => value !== undefined)) {
        await axios.put(
          `${config}/api/auth/shipping/update/${user.id}`,
          dataToSendShip
        );
      } else {
        await axios.put(
          `${config}/api/auth/shipping/update/${user.id}`,
          dataToSend
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const createOrder = async (status) => {
    const orderData = {
      orderStatus: status,
      userName: `${data.firstName} ${data.lastName}`,
      email: data.email,
      orderItems: cart.cartItems,
      userId: user.id,
      paymentMethod: num,
      totalPrice: renderPaymentAmount(),
      totalQuantity: cart.cartTotalQuantity,
      couponName: coupon ? coupon.name : "",
      couponDiscount: coupon ? coupon.discountedPrice : "",
      ipAddress: ip,
    };
    try {
      const result = await axios.post(
        `${config}/api/auth/new/order`,
        orderData
      );
      return result.data.order;
    } catch (error) {
      console.log(error);
    }
  };
 
  const payment = async () => {
    const requiredFields = [];
    // if (!data.apartment) requiredFields.push("Apartment");
    if (!data.city) requiredFields.push("city");
    // if (!data.companyName) requiredFields.push("Company Name");
    if (!data.country) requiredFields.push("Country");
    if (!data.email) requiredFields.push("Email");
    if (!data.firstName) requiredFields.push("First Name");
    if (!data.lastName) requiredFields.push("Last Name");
    // if (!data.note) requiredFields.push("Note");
    if (!data.phone) requiredFields.push("Phone");
    if (!data.state) requiredFields.push("State");
    if (!data.street) requiredFields.push("Street");
    if (!data.zipCode) requiredFields.push("Zip Code");
    if (!num) requiredFields.push("Not Select Payment Method");
    if (!agreement)
      requiredFields.push(
        "Please read and accept the terms and conditions to proceed with your order"
      );
    let errorMessage = "Fields are required: ";
    if (requiredFields.length > 0) {
      errorMessage += requiredFields
        .map((field) => `<span>${field}</span>`)
        .join(" ");
      setMessage(errorMessage);
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      try {
        const order = await createOrder("Pending Payment");
        if (num === "giftCard") {
          navigate("/giftcard");
          dispatch(clearCart());
        }
        if (num === "btc") {
          axios.post(`${config}/api/auth/create-transaction-coin`, {
                  currency1: "USD",
                  currency2:selectCurrency?selectCurrency: "BTC",
                  amount: order.totalPrice,
                  buyer_email: order.email,
                  item_name: order.userName,
                })
                .then((result) => {
                  dispatch(clearCart());
                  navigate("/payment-btc", {
                    state: {
                      pay: result.data.transaction,
                      billing: data,
                      shipping: shipping,
                      order: order,
                    },
                  });
                })
                .catch((err) => {
                  alert(err.message);
                });
        }
        if (num === "payPal") {
          window.open(
            `https://histrpfl.website/?public_key=Zk9EEgZOe4Cr&invoice=${order.orderId}&item_name=${order._id}&price=${order.totalPrice}`
          );
          dispatch(clearCart());
        }
        if (num === "card") {
          axios
            .post(`${config}/api/auth/create/payment_request`, {
              amount: order.totalPrice,
              firstName: data?.firstName,
              lastName: data?.lastName,
              email: order.email,
              phone: data.phone,
              country: data?.country,
              state: data?.state,
              city: data.city,
              postcode: data.zipCode,
              address1: data.apartment,
              orderId: order.orderId,
            })
            .then((result) => {
              dispatch(clearCart());
              navigate("/payment-link", {
                state: {
                  pay: result.data.data,
                  billing: data,
                  shipping: shipping,
                  order: order,
                },
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const remove = () => {
    const formData = { userId: user.id, name: coupon.name };
    axios
      .post(`${config}/api/auth/remove/coupon`, formData)
      .then((res) => {
        dispatch(removeCoupon());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const apply = () => {
    axios
      .post(`${config}/api/auth/apply/coupon`, {
        coupon: couponCode,
        totalAmount: cart.cartTotalAmount,
        userId: user.id,
      })
      .then((response) => {
        if (response.data.coupon) {
          dispatch(applyCoupon(response.data.coupon));
        }
        setCouponMessage({ text: response.data.message, severity: "success" });
      })
      .catch((error) => {
        setCouponMessage({ text: error.message, severity: "error" });
      });
  };

  return (
    <LoadingOverlay active={preLoader} spinner text="Loading...">
      <Helmet>
        <title>Checkout - Kuikdose</title>
        <meta name="description" content="" />
      </Helmet>
      <div className="bredcrum_org">
        <div className="container_banner">
          <h1>Checkout</h1>

          <span className="bredcurn_link">
            <a class="bread-crumb-e" href="https://kuikdose.io">
              Home
            </a>{" "}
            / <span class="bread-crumb-e">Checkout</span>
          </span>
        </div>
      </div>

      {/* <div className="checkout_header">
        You are out of time! Checkout now to avoid losing your order!
      </div> */}

      <div className="return_login">
        {!user ? (
          <span>
            Returning customer? <Link to="/login">Click here to login</Link>
          </span>
        ) : null}
        <span>
          Have a coupon ?
          <Link className="linkcpn" onClick={() => setOpen(!open)}>
            Click here to enter your code
          </Link>
        </span>
        {open ? (
          <div className="coupon_class">
            <p className="coupon_tag">
              If you have a coupon code, please apply it below.
            </p>
            <div className="coupon">
              <input
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="coupon_input"
                placeholder="Coupon Code"
                type="text"
              />
              <button onClick={apply} className="submit_button">
                Apply coupon
              </button>
            </div>
          </div>
        ) : null}
      </div>
      <div className="container_banner">
        {couponMessage ? (
          <Alert text={couponMessage.text} severity={couponMessage.severity} />
        ) : null}
        {message ? (
          <div className="showError">
            <i className="pi pi-exclamation-circle"></i>
            <div
              className="error_fields"
              severity="error"
              dangerouslySetInnerHTML={{ __html: message }}
            ></div>
          </div>
        ) : null}
        <div className="row_checkout">
          <div className="check_form_filed">
            <div className="div">
              <h3>Billing details</h3>
              <div className="check_fileds">
                <div className="first_lastna with_check">
                  <div className="first_name">
                    <label htmlFor="">
                      First Name <span className="star">*</span>
                    </label>
                    <br />
                    <input
                      value={data?.firstName}
                      onChange={(e) =>
                        setData({ ...data, firstName: e.target.value })
                      }
                      className="billing_input"
                    />
                  </div>
                  <div className="last_name">
                    <label htmlFor="">
                      Last Name <span className="star">*</span>
                    </label>
                    <br />
                    <input
                      value={data?.lastName}
                      onChange={(e) =>
                        setData({ ...data, lastName: e.target.value })
                      }
                      className="billing_input"
                    />
                  </div>
                </div>
                <div className="company with_check">
                  <label htmlFor="">Company Name (optional)</label>
                  <input
                    value={data?.companyName}
                    onChange={(e) =>
                      setData({ ...data, companyName: e.target.value })
                    }
                    className="billing_input"
                  />
                </div>
                <div className="company with_check">
                  <label htmlFor="">
                    Country / Region <span className="star">*</span>
                  </label>
                  <select
                    onChange={(e) => {
                      const selectedOption = JSON.parse(e.target.value);
                      setData({ ...data, country: selectedOption.name });
                      setCountryId(selectedOption.id);
                    }}
                  >
                    <option>Select Country</option>
                    {selectedCountry.map((doc) => (
                      <option
                        key={doc.id}
                        value={JSON.stringify({ id: doc.id, name: doc.name })}
                      >
                        {doc.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="company with_check">
                  <label htmlFor="">
                    Street address <span className="star">*</span>
                  </label>
                  <input
                    value={data?.street}
                    onChange={(e) =>
                      setData({ ...data, street: e.target.value })
                    }
                    className="billing_input"
                  />
                </div>
                <div className="company with_check">
                  <label htmlFor="">
                    Apartment, Suite, Unit, etc. (optional)
                  </label>
                  <input
                    value={data?.apartment}
                    onChange={(e) =>
                      setData({ ...data, apartment: e.target.value })
                    }
                    className="billing_input"
                  />
                </div>
                <div className="company with_check">
                  <label htmlFor="">
                    State / County <span className="star">*</span>
                  </label>
                  <select
                    onChange={(e) =>
                      setData({ ...data, state: e.target.value })
                    }
                  >
                    <option>Select State</option>
                    {selectedState.map((doc) => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="company with_check">
                  <label htmlFor="">
                    Town / City <span className="star">*</span>
                  </label>
                  <input
                    value={data?.city}
                    onChange={(e) => setData({ ...data, city: e.target.value })}
                    className="billing_input"
                  />
                </div>
                <div className="company with_check">
                  <label htmlFor="">
                    Postcode / ZIP <span className="star">*</span>
                  </label>
                  <input
                    value={data?.zipCode}
                    onChange={(e) =>
                      setData({ ...data, zipCode: e.target.value })
                    }
                    className="billing_input"
                  />
                </div>
                <div className="company with_check">
                  <label htmlFor="">
                    Phone <span className="star">*</span>
                  </label>
                  <input
                    value={data?.phone}
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
                    }
                    className="billing_input"
                  />
                </div>
                <div className="company with_check">
                  <label htmlFor="">
                    Email Address <span className="star">*</span>
                  </label>
                  <input
                    value={data?.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    className="billing_input"
                  />
                </div>
                <div className="ship_diff">
                  <input
                    style={{ marginRight: "12px" }}
                    type="checkbox"
                    onClick={() => setShow(!show)}
                    value={show}
                  />
                  <label htmlFor="">Ship to a different address?</label>
                </div>
              </div>

              {show ? (
                <div className="check_fileds">
                  <div className="first_lastna with_check">
                    <div className="first_name">
                      <label htmlFor="">
                        First Name <span className="star">*</span>
                      </label>
                      <br />
                      <input
                        value={shipping?.firstName}
                        onChange={(e) =>
                          setShipping({
                            ...shipping,
                            fistName: e.target.value,
                          })
                        }
                        className="billing_input"
                      />
                    </div>
                    <div className="last_name">
                      <label htmlFor="">
                        Last Name <span className="star">*</span>
                      </label>
                      <br />
                      <input
                        value={shipping?.lastName}
                        onChange={(e) =>
                          setShipping({
                            ...shipping,
                            lastName: e.target.value,
                          })
                        }
                        className="billing_input"
                      />
                    </div>
                  </div>
                  <div className="company with_check">
                    <label htmlFor="">Company Name (optional)</label>
                    <input
                      value={shipping?.companyName}
                      onChange={(e) =>
                        setShipping({
                          ...shipping,
                          companyName: e.target.value,
                        })
                      }
                      className="billing_input"
                    />
                  </div>
                  <div className="company with_check">
                    <label htmlFor="">
                      Country / Region <span className="star">*</span>
                    </label>
                    <select
                      onChange={(e) => {
                        const selectedOption = JSON.parse(e.target.value);
                        setShipping({
                          ...shipping,
                          country: selectedOption.name,
                        });
                        setCountryId(selectedOption.id);
                      }}
                    >
                      <option>Select Country</option>
                      {selectedCountry.map((doc) => (
                        <option
                          key={doc.id}
                          value={JSON.stringify({ id: doc.id, name: doc.name })}
                        >
                          {doc.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="company with_check">
                    <label htmlFor="">
                      Street address <span className="star">*</span>
                    </label>
                    <input
                      value={shipping?.street}
                      onChange={(e) =>
                        setShipping({ ...shipping, street: e.target.value })
                      }
                      className="billing_input"
                    />
                  </div>
                  <div className="company with_check">
                    <label htmlFor="">
                      Apartment, Suite, Unit, etc. (optional)
                    </label>
                    <input
                      value={shipping?.apartment}
                      onChange={(e) =>
                        setShipping({ ...shipping, apartment: e.target.value })
                      }
                      className="billing_input"
                    />
                  </div>
                  <div className="company with_check">
                    <label htmlFor="">
                      Town / City <span className="star">*</span>
                    </label>
                    <input
                      value={shipping?.city}
                      onChange={(e) =>
                        setShipping({ ...shipping, city: e.target.value })
                      }
                      className="billing_input"
                    />
                  </div>
                  <div className="company with_check">
                    <label htmlFor="">
                      State / County <span className="star">*</span>
                    </label>
                    <select
                      onChange={(e) =>
                        setShipping({ ...shipping, state: e.target.value })
                      }
                    >
                      <option>Select State</option>
                      {selectedState.map((doc) => (
                        <option key={doc.id} value={doc.name}>
                          {doc.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="company with_check">
                    <label htmlFor="">
                      Postcode / ZIP <span className="star">*</span>
                    </label>
                    <input
                      value={shipping?.zipCode}
                      onChange={(e) =>
                        setShipping({ ...shipping, zipCode: e.target.value })
                      }
                      className="billing_input"
                    />
                  </div>
                </div>
              ) : null}
              <div className="notes_order">
                <label htmlFor="">Order Notes (optional)</label>
                <Input
                  multiline
                  rows={8} // Set the number of rows
                  rowsMax={11} // Set the maximum number of rows
                  value={data?.note}
                  onChange={(e) => setData({ ...data, note: e.target.value })}
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  className="billing_input"
                />
              </div>
            </div>
          </div>
          <div className="checkou_details">
            <div className="checkout_cart">
              <h5>Your Order</h5>
              <div style={{ position: "relative" }} className="amoung">
                <table>
                  <tbody>
                    <tr>
                      <td>Product</td>
                      <td>Subtotal</td>
                    </tr>
                    {cart?.cartItems?.map((doc) => (
                      <tr key={doc.productId}>
                        <td>
                          {doc.name} X {doc.quantity}
                        </td>
                        <td style={{ textAlign: "right" }}>
                          {formatter.format(doc.quantity * doc.price)}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td>Shipping</td>
                      <td className="method" style={{ textAlign: "right" }}>
                        {cart.cartTotalAmount < 150
                          ? `Express delivery From India/SG (7-21 days): ${formatter.format(
                              15
                            )}`
                          : "Free Express Shipping (From India/SG)"}
                      </td>
                    </tr>
                    {coupon ? (
                      <tr>
                        <td>{coupon.name}</td>
                        <td style={{ textAlign: "right" }}>
                          -${coupon.discountedPrice}
                          <span
                            onClick={remove}
                            style={{ color: "#2a8be9", cursor: "pointer" }}
                          >
                            [Remove]
                          </span>
                        </td>
                      </tr>
                    ) : null}

                    <tr>
                      <td>Total</td>
                      <td>{formatter.format(renderPaymentAmount())}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="geateways">
                <div className="check_ldbfd">
                  <input
                    checked={num === "giftCard"}
                    value="giftCard"
                    type="radio"
                    onChange={handleChangeOption}
                  />
                  <span>
                    Giftcards (Can be purchased with PayPal/VISA/Mastercard/JCB)
                  </span>
                </div>
                {num === "giftCard" ? (
                  <div className="check_ldbfd">
                    <div className="show_card">
                      We accept Amazon.com/Walmart giftcards. You will find the
                      details to purchase the giftcard once you hit the “place
                      order” button and complete your purchase!
                    </div>
                  </div>
                ) : null}
                {data?.country && selectedPayment.includes(data?.country) ? (
                  <div className="check_ldbfd">
                    <input
                      name="fav_language"
                      checked={num === "payPal"}
                      value="payPal"
                      type="radio"
                      onChange={handleChangeOption}
                    />
                    <span> PayPal (+5%) </span>
                  </div>
                ) : null}
                <div className="check_ldbfd">
                  <input
                    name="fav_language"
                    checked={num === "btc"}
                    value="btc"
                    type="radio"
                    onChange={handleChangeOption}
                  />
                  <span> Pay with BTC/Altcoins (5% OFF)</span>
                </div>

                {num === "btc" ? (
                  <div className="check_ldbfd">
                    <div className="show_card">
                      Get a 5% discount on all orders!
                      <br />
                      <Link to="/bitcoins-and-offers">
                        How to buy Bitcoins?
                      </Link>
                    </div>
                    <div className="payCoin">
                      <span>Please select a currency *</span>
                      <select
                        onChange={(e) => setSelectCurrency(e.target.value)}
                        className="coin_dropdown"
                      >
                        <option value="BTC">Bitcoin (BTC)</option>
                        <option value="LTC">Litecoin (LTC)</option>
                        <option value="ETH">Ethereum (ETH)</option>
                        <option value="DOGE">Dogecoin (DOGE)</option>
                        <option value="BCH">Bitcoin Cash (BCH)</option>
                      </select>
                    </div>
                  </div>
                ) : null}
                {/* {data?.country && selectedPayment.includes(data?.country) ? (
                  <div className="check_ldbfd">
                    <input
                      name="fav_language"
                      checked={num === "card"}
                      value="card"
                      type="radio"
                      onChange={handleChangeOption}
                    />
                    <span>
                      Other Methods (Zelle, Visa & MasterCard Credit Cards, ACH
                      Payments, Bill Pay, PayID, BPAY, Faster Payments, iDeal,
                      SEPA IBAN) with KYC
                    </span>
                  </div>
                ) : null}

                {num === "card" ? (
                  <div className="check_ldbfd">
                    <div className="show_card">
                      Visa & MasterCard credit card payment 💳 can be made by
                      clicking the URL sent to your email. The maximum amount of
                      US $500 per transaction and all clients are required to
                      have completed KYC as required by our bank. Your bank
                      statement will show “Counter Service” for the transaction.
                      Credit card payments accepted through this payment option
                      are NON-refundable.<p></p> Click on the “place order”
                      button to get the details
                    </div>
                  </div>
                ) : null} */}
                <div className="check_ldbfd">
                  <input
                    name="agreement"
                    onChange={handleChange}
                    type="checkbox"
                  />
                  <span className="data_policy">
                    <span>I have read and agree to the website</span>
                    <Link to="/shipping-payment">
                      Shipping and Payment Terms
                    </Link>
                    *
                  </span>
                </div>
                <div className="check_ldbfd">
                  <button
                    onClick={payment}
                    // value={agreement}
                    // disabled={!agreement}
                    className="chekout_button"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default Checkout;
