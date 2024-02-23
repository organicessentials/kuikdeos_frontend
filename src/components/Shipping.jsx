import React from "react";
import {Helmet} from "react-helmet";
import abut from "../assets/6206717.svg";
import images_update from "../assets/5124558.svg";
import deliv from "../assets/deliv.png";
import payment_ship from "../assets/payment_ship.png";


const Shipping = () => {
  return (
    <>
     <Helmet>
        <title>Shipping &amp; Payment - Organic Essentials Hub</title>
        <meta name="description" content="" />
    </Helmet>
       <div className="bredcrum_org">
        <div className="container_banner">
          <h1>Shipping & Payment</h1>

          <span className="bredcurn_link"><a class="bread-crumb-e" href="https://kuikdose.io">Home</a> / <span class="bread-crumb-e">Shipping & Payment</span></span>
        </div>
      </div>
      <div className="abot_sec">
        <div className="container_banner">


        <div className="abot_kd">
            <div className="kd_lo">
              <img src={abut} />
            </div>
            <div className="conte_abt_kd elbzotech-text-editor text-css-e">
            <h2>Global Shipping Update:</h2>
            <p>We offer free express shipping worldwide, typically taking 5-14 days. Due to pandemic-related delays, it may now take around 3-4 weeks to arrive.</p>
            <span><strong>Enjoy free express worldwide shipping on all other product orders over USD 150.</strong></span><br />
<span><strong>5% returning customer discount.</strong></span>

<p>Our 100% money-back guarantee applies, except for select countries with strict customs regulations.</p>
<p><strong>Countries with No Refunds/Reshipments: </strong>Austria, Algeria, Armenia, Belgium, Bosnia and Herzegovina, Brazil, Canada, China, Croatia, Czech, Denmark, Germany, Hungary, Israel, Iceland, India, Indonesia, Italy, Japan, Jordan, Mexico, Netherlands, New Zealand, Pakistan, Peru, Poland, Russia, Norway, Saudi Arabia, Serbia, Sweden, South Africa, Taiwan, United Arab Emirates, and other EU countries.<strong></strong></p>
<p><strong>Delivery Times:</strong>&nbsp; 7-12 business days for the UK, Europe, and Australia; 14-30 days for the rest of the world, with current pandemic-related delays.</p>
              </div>
          </div>

          <div className="abot_kd">
           
            <div className="conte_abt_kd elbzotech-text-editor text-css-e">
            <h2>Order Tracking:</h2>
            <p>Once your order is confirmed, tracking details will be provided within 24 hours. You can track your shipment at various postal services based on the order suffix or prefix provided.</p>
<p><strong> Suffixes and Prefixes:</strong> SG (SingPost), IN (IndiaPost), CH (Swiss Post), FR (France Post), INAWABET (DHL India).</p>
<p><strong> Tracking Time:</strong> Allow 5-7 business days after receiving your tracking number for the system to update. You’ll receive an email notification once your tracking number is active.</p>
              </div>
              <div className="kd_lo">
              <img src={deliv} />
            </div>
          </div>

          <div className="abot_kd">
          <div className="kd_lo">
             <img src={payment_ship} />
           </div>
           <div className="conte_abt_kd elbzotech-text-editor text-css-e">
           <h2>Payment Methods:</h2>
            <p>We accept various payment methods depending on the shipping country, including Paypal, E-checks, Credit Cards, Amazon/Walmart Giftcards (purchased with VISA/Mastercard), and Cryptocurrency. All prices are in USD.</p>
             </div>
            
         </div>

         <div className="abot_kd">
           
            <div className="conte_abt_kd elbzotech-text-editor text-css-e">
            <h2>Contact Us:</h2>
            <p>We are committed to providing exceptional customer support, and your satisfaction is our priority. Our dedicated team is here to assist you every step of the way. Whether you have questions about our products, shipping, payment methods, or any other inquiries, we’re available 24/7 to help.</p><p><strong>Ways to Reach Us:</strong></p><ol><li><p><strong>Email:</strong> For general inquiries, support, or assistance, please reach out to us at <a href="mailto:support@kuikdose.io" target="_new">support@kuikdose.io</a>. Our email support is monitored around the clock, and we aim to respond promptly to ensure you have a seamless experience.</p></li><li><p><strong>Frequently Asked Questions (FAQs):</strong> Our website features a comprehensive FAQ section where you can find answers to commonly asked questions. It’s a valuable resource to quickly find information about our products, shipping, and more.</p></li><li><p><strong>Customer Feedback:</strong> We value your feedback and continuously strive to improve our services. If you have suggestions, comments, or feedback on your experience with us, please don’t hesitate to share. Your insights are essential in helping us enhance our customer experience.</p></li></ol><p>At Kuikdose, we believe in building a strong and trustworthy relationship with our customers. Don’t hesitate to contact us; we’re here to make sure your Kuikdose experience is exceptional.</p>	
               </div>
              <div className="kd_lo">
              <img src={images_update} />
            </div>
          </div>
        </div>
        </div>

  
    </>
  );
};

export default Shipping;
