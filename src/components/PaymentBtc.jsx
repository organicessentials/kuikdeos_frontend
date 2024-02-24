import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import btc from "../assets/btc.svg";

const PaymentBtc = () => {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate()

  const [timeRemaining, setTimeRemaining] = useState(data.pay.timeout);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => {
        const updatedTime = prevTime - 1;

        if (updatedTime <= 0) {
          setPaymentStatus('complete');
          clearInterval(intervalId);
          navigate("/")
        }

        return updatedTime;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [data.pay.timeout]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
  
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds
    ).padStart(2, '0')}`;
  };

  const currentDate = new Date();
  return (
    <div className="order_complate_section">
      <div className="thaxu_details">
        <div className="border_thaxs">
          <span>Thank you. Your order has been received.</span>
        </div>
      </div>
      <div className="thaxu_details">
        <div className="comple_pay">
          <h2>To complete your order</h2>
          <div className="">
            <p>
              Send
              <span className="">
                <span className="">
                  <input
                    readOnly="readonly"
                    size={12} className="send_pay"
                    defaultValue={`${
                      data.pay.amount
                    } ${data.order.paymentMethod.toUpperCase()}`}
                  />

                  <span
                    className=""
                    style={{ height: 35, width: 35, top: "-5.5px" }}
                  />
                </span>
              </span>
              <br />
              To
              <span className="">
                <span className="">
                  <input
                    readOnly="readonly" className="send_pay"
                    size={34}
                    defaultValue={data.pay.address}
                  />
                  <span
                    className=""
                    style={{ height: 35, width: 35, top: "-5.5px" }}
                  />
                </span>
              </span>
            </p>
            <div className="scan">
              <div className="csner">
              <img
                src={data.pay.qrcode_url}
                title={`bitcoincash:${data.pay.address}?amount=${data.pay.amount}`}
              />
            </div>
            <div className="csner">
              <div className="">
                <p>
                  Awaiting payment
                  <br />
                  <span className="">(checked every 15 secs)</span>
                </p>
                <span className="hours_minutes">{formatTime(timeRemaining)}</span>
              </div>
              <div className="">
                <div id="icon-check" />
                <p>Payment complete!</p>
              </div>
            </div>
            </div>

            <div className="payment_buttons">
              <div>
                <a
                  href={`bitcoincash:${data.pay.address}?amount=${data.pay.amount}`}
                >
                  <div
                    className="open_wallet_payment"
                    role="img"
                    aria-label="Open in wallet"
                  />
                  <img src={btc} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="thaxu_details">
        <div className="order_details">
          <h4>ORDER DETAILS</h4>
          <div className="order_row_se">
            <h5>PRODUCT</h5>
            <h5>TOTAL</h5>
          </div>
          <div className="order_row_se">
            {data.order.orderItems.map((doc) => (
              <>
                <span>{doc.name}</span>
                <span>{formatter.format(doc.price)}</span>
              </>
            ))}
          </div>
          <div className="order_row_se">
            <span>Subtotal :</span>
            <span>{formatter.format(data.order.totalPrice)}</span>
          </div>
          <div className="order_row_se">
            <span>Shipping :</span>
            <span>{formatter.format(data.order.shippingPrice)} <small class="shipped_via">via Express delivery From India/SG (7-21 days)</small></span>
          </div>
          <div className="order_row_se">
            <span>Payment Method :</span>
            <span>{data.order.paymentMethod}</span>
          </div>
          <div className="order_row_se">
            <h5>TOTAL</h5>
            <h5>{formatter.format(data.order.totalPrice)}</h5>
          </div>
          <div>
            <button className="re_order_com">RE-ORDER</button>
          </div>
        </div>
      </div>
      <div className="thaxu_details">
        <div className="order_details">
          <h4>BILLING ADDRESS</h4>
          <span>
            {data.billing?.apartment} {data.billing?.street}
          </span>
          <span>
            {data.billing?.country} {data.billing?.state}
          </span>
          <span>
            {data.billing?.city} {data.billing?.zipCode}
          </span>
          <span>{data.billing?.phone} </span>
          <span>{data.billing?.email} </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentBtc;
