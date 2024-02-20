import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Payment = () => {

  const location = useLocation();
  const data = location.state;
  
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

  const currentDate = new Date()
  return (
    <div className="container">
      <div className="thxns_item">
        <p >
          Thank you. Your order has been received.
        </p>
        <div className="details_user">
          <li className="li_details">
            Order number: <strong>{data.order.orderId}</strong>
          </li>
          <li className="li_details">
            Date: <strong>{currentDate.toDateString()}</strong>
          </li>
          <li  className="li_details">
            Email: <strong>{data.billing.email}</strong>
          </li>
          <li className="li_details" >
            Total:
            <strong>
              <span >
                <bdi>
                  {formatter.format(data.order.totalPrice)}
                </bdi>
              </span>
            </strong>
          </li>
        </div>
        <div>
          <div >
            Payment method:
          </div>
          <strong>
              Other Methods (Zelle, Visa &amp; MasterCard Credit Cards, ACH
              Payments, Bill Pay, PayID, BPAY, Faster Payments, iDeal, SEPA
              IBAN) with KYC
            </strong>
          </div>
        <div className="order_status">
          <div>
            <li className="li_details">
              Order Status :
              <strong>
                pending
              </strong>
            </li>
          </div>
        </div>
        <section >
          <div style={{ background: "#fbf1ca", padding: 25, fontSize: 16 }}>
            <p>
              Please click the payment link below, or use the email we just sent
              to complete the Payment for this order.
            </p>
            <p>
              <strong>Payment Link:</strong>
              <a
                href={data?.pay?.payment_link}
                target="_blank"
                style={{ color: "#157bd5",cursor:"pointer"}}
              >
                {data?.pay?.payment_link}
              </a>
            </p>
          </div>
          <h2 className="order-details__title">Order details</h2>
          <table >
            <thead>
              <tr>
                <td >
                  Product
                </td>
                <td >
                  Total
                </td>
              </tr>
            </thead>
            {data.order.orderItems.map((doc)=>(
              <tbody>
              <tr >
                <td >
                  <a href="">
                    {doc.name}
                  </a>
                  <strong >×&nbsp;{doc.cartQuantity}</strong>
                </td>
                <td >
                  <span >
                    <bdi>
                      {formatter.format(doc.price)}
                    </bdi>
                  </span>
                </td>
              </tr>
            </tbody>
            ))}
            
            <tfoot>
              <tr>
                <td>Subtotal:</td>
                <td>
                  <span >
                    {formatter.format(data.order.totalPrice)}
                  </span>
                </td>
              </tr>
              <tr>
                <td >Shipping:</td>
                <td>Free Express Shipping</td>
              </tr>
              <tr>
                <td>Payment method:</td>
                <td>
                  Other Methods (Zelle, Visa &amp; MasterCard Credit Cards, ACH
                  Payments, Bill Pay, PayID, BPAY, Faster Payments, iDeal, SEPA
                  IBAN) with KYC
                </td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>
                  <span >
                    {formatter.format(data.order.totalPrice)}
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </section>
        <section >
          <section className="bill_section" >
            <div  style={{flex:5,borderRight:"1px solid #dbcdcd"}}>
              <h2 className="order-details__title">Billing address</h2>
              <address>
              {data?.billing?.firstName} {data?.billing?.lastName}
                <br />
                {data?.billing?.apartment}
                <br />
                {data?.billing?.street}
                <br />
                {data?.billing?.companyName}
                <br />
                {data?.billing?.city}
                <br />
                {data?.billing?.state.name}
                <br />
                {data?.billing?.country.name}
                <br />
                  {data?.billing?.phone}
                
               
                <p >
                  {data?.billing?.zipCode}
                </p>
                <br />
                <p >
                  {data?.billing?.email}
                </p>
              </address>
            </div>
            <div style={{flex:5}}>
              <h2 className="order-details__title">Shipping address</h2>
              <address>
              {data?.shipping?.firstName} {data?.shipping?.lastName}
                <br />
                {data?.shipping.apartment}
                <br />
                {data?.shipping.street}
                <br />
                {data?.shipping.companyName}
                <br />
                {data?.shipping.city}
                <br />
                {data?.shipping.state}
                <br />
                {data?.shipping.country}
                <br />
                  {data?.shipping.phone}
                
               
                <p >
                  {data?.shipping?.zipCode}
                </p>
              </address>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Payment;