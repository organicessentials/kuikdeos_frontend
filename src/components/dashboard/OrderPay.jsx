import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config";
import { useSelector } from "react-redux";
import { decodeToken } from "react-jwt";
import LoadingOverlay from "react-loading-overlay-ts";
import paypal from "../../assets/paypal.png";
import stripe from "../../assets/stripe1.png";
import sezzle from "../../assets/sezzle.png";
import echeck from "../../assets/echeck1.png";
import { clearCart } from "../../features/cartSlice";

const OrderPay = () => {
  const location = useLocation();
  const data = location?.state;
  const navigate = useNavigate();
  const [num, setNum] = useState(data?.paymentMethod);
  const [approveToken, setApproveToken] = useState("");
  const [agreement, setAgreement] = useState(false);
  const { user: item } = useSelector((state) => state.user);
  const [preLoader, setPreLoader] = useState(false);

  const user = decodeToken(item);

  console.log(num);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`${config}/api/auth/billing/${user.id}`);
      setBillingData(result.data);
    };
    getData();
  }, []);

  const handleChange = (event) => {
    setAgreement(event.target.checked);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const handleChangeOption = (e) => {
    setNum(e.target.value);
    setPreLoader(true);
    setTimeout(() => {
      setPreLoader(false);
    }, 1000);
  };

  

  const payment = () => {
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
  };

  return (
    <LoadingOverlay active={preLoader} spinner text="Loading...">
      <div className="container_sec">
        <div className="table_order">
          <table className="tabel_aff">
            <thead>
              <tr>
                <td>Product</td>
                <td>Qty</td>
                <td>Total</td>
              </tr>
            </thead>
            <tbody>
              {data?.orderItems.map((doc) => (
                <tr>
                  <td>
                    <Link>{doc.name}</Link>
                  </td>
                  <td>
                    <b>{doc.quantity}</b>
                  </td>
                  <td>{formatter.format(doc.price)}</td>
                </tr>
              ))}
              <tr>
                <td>Subtotal:</td>
                <td></td>
                <td>{formatter.format(data.totalPrice)}</td>
              </tr>
              <tr>
                <td>Shipping:</td>
                <td></td>
                {data?.shippingPrice ? (
                  <td>$8.90 via Free Shipping over USD 35</td>
                ) : (
                  <td>Free Express Shipping (From India/SG)</td>
                )}
              </tr>
              <tr>
                <td>Payment method:</td>
                <td></td>
                <td>{num ? num : data?.paymentMethod}</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td></td>
                <td>{formatter.format(data.totalPrice)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div></div>

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
                {data?.country && selectedPayment.includes(data?.country) ? (
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
                ) : null}
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
    </LoadingOverlay>
  );
};

export default OrderPay;
