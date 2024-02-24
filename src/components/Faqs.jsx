import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Faqs = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Help Center - Kuikdose</title>
        <meta name="description" content="" />
      </Helmet>
      <div className="bredcrum_org">
        <div className="container_banner">
          <h1>Help Center</h1>

          <span className="bredcurn_link"><a class="bread-crumb-e" href="https://kuikdose.io">Home</a> / <span class="bread-crumb-e">Help Center</span></span>
        </div>
      </div>
      <div className="faqs_sec">
        <div className="container_banner">
          <div className="faqs_section">
              <div className="faqs1"> 
              <h2>Information</h2>
              <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">Do you sell brand name pills?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          Yes, we sell both Brand and Generic pills.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">What does the term "generic" mean?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          Generic drugs are produced and distributed without patent protection. A generic contains the same active ingredients as the brand pills and is identified by its chemical name rather than its brand name. Generic Drugs are manufactured by the certified producer but not by the original drug’s producer. Generic drugs can be issued when the brand-name equivalent’s patent expires. Upon the original medicine’s patent expiration any pharmaceutical company can obtain a right on its production and purchase a chemical formula.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">What is the quality of generic drugs?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          The quality of generic drugs doesn’t differ from its brand name counterparts, even if they differ in shape and color. Generic drugs have identical active ingredients, the quantity and speed of absorption of its active ingredients into the bloodstream.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl"> Are the generic pills sold here FDA approved?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          All generic pills are FDA approved companies.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">Why do generic medicines cost less than brand ones?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          Unlike generic drugs, a large part of the costs incurred by original manufacturers of brand name drugs are for research and development and advertising. Companies, manufacturing generic medicines do not have to invest in any research and development or pay for advertising and marketing. It is only necessary to purchase a chemical formula to produce a generic drug. Consequently, you get world-class drugs at a reasonable price!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">What if I didn't find an answer to my question here?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          Please contact our customer support team at support@kuikdose.io any time and we’ll be happy to answer your questions! We’re online 24×7!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">Any more questions? Happy to help!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          For any other questions, please contact us at <span><a href="mailto:support@kuikdose.io">support@kuikdose.io</a>. </span>We’re online 24×7! 
          </Typography>
        </AccordionDetails>
      </Accordion>

              </div>
              <div className="faqs1"> 
              <h2>Shopping Infomation</h2>

              <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">What shipping rates do you have?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          The shipping rates may vary depending on the shipping option you choose, the country of the destination and the products you order. To find out the shipping cost, you should add desired products to shopping cart and proceed to checkout. Please check our <a href="/shipping-payment">shipping and payment page</a>  to understand shipping options.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">Do you ship internationally?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          We ship to most worldwide countries. Please check our shipping & payment page or contact customer support at support@kuikdose.io to find out the available delivery options for your region.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">Do you require a prescription before purchasing on your site?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          Notice that we do not require any prescription for anything you can order on our site, but we strongly recommend you to consult your doctor before ordering anything from us.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl"> How orders are being sent?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          We understand that your confidentiality and anonymity is important when you place an order online with us. That’s why our orders are sent in discreet looking packages without any information of the contents on the outside of the package.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">Can my order be delayed at customs?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          If this happens, you’ll be informed additionally. The recipient is asked to come and give a permission to examine the parcel. After that you should receive your products. If you have any problems with getting your order, please let us know and we will try to resolve the problem.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">How can I track my order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs custo_faqs">
          Once your order is finalized, the item is shipped in 24 hours, we will upload the tracking details in your dashboard.
          <span>➡ Track all of your shipments at Aftership.</span>
          <span>➡ If your order has an SG suffix, please track it at SingPost.</span>
          <span>➡ If your order has an IN suffix, please track it at IndiaPost.</span>
          <span>➡ If your order has a CH suffic, please track it at Swiss Post.</span>
          <span>➡ If your order has an FR suffix, please track it at France Post.</span>
          <span>➡ If you order has an INAWABET prefix, please track it at DHL India.</span>
          <h3>Tracking number doesn’t exist?</h3>
         <span> Order information may <b>not appear in the tracking system until the shipment leave the origin country,</b> so sometimes it may show you “Tracking details not found” or “Pre-Shipment”.Please allow 5 to 7 business days after receiving your tracking number to be able to track your shipment. We’ll send you an additional tracking notification by email once your tracking number is live.</span>
         <span>None of our packages require a signature upon delivery. We will deliver your package to your mailbox.</span>


          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">How much time does it takes for my order to arrive?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          The delivery takes from 7 to 12 business days for orders to 🇬🇧 the UK, 🇪🇺 Europe, and 🇦🇺 Australia; and 14-30 days for the rest of the world 🌍. However due to the current pandemic situation it is taking around three to four weeks to be delivered.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">What if the package is damaged or something is missing?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          In this case you have to contact our support team and notify the problem. We will either resend the package or refund your payment. See our Delivery Guarantee for more information.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">Why I still haven't received my order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          You can use your Delivery tracking code to check the current delivery status. It can take up to 30 days for your order to be delivered. If only the parcel does not arrive within this term, you should contact your local governmental postal office. If they confirm that the parcel has not been delivered, we will reship the order FREE of charge for you. Though, if the original order subsequently arrives as the reshipped order then we rely on your honesty to inform us as soon as possible. We always do our best to solve problems in a reasonable manner.
</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">What shipping method do you offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          We offer only trackable shipping methods at the moment from Singapore and India: Trackable Courier Service takes 5–14 days to deliver. Tracking number for Indiapost/Swiss post/DHL/Singpost  starts working within 72 business hours after the order is shipped. However due to the situation there are little delays and may take around three – four weeks to arrive. Please check our shipping and payment page for details.
        </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">What if the order isn’t received during the delivery time?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          If the order isn’t received during the delivery time we guarantee to reship the product free of charge or give your money back.
         </Typography>
        </AccordionDetails>
      </Accordion>
              </div>
              <div className="faqs1"> 
              <h2> Payment Infomation</h2>
              <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">What sum do I have to pay if you reship the product?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          We will reship the product free of charge. No additional charges will be placed.

</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">Order shows "Pending Payment" even after the payment has been made?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          For Crypto, once you make the payment it may display the pending payment status for sometime till we confirm your payment. The status will be automatically updated in the dashboard once the order is shipped in 24-48 hours. If you have made the payment just sit back and relax!

</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">Can I cancel the order and can I get my funds credited?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          Normally we ship in 2 hours. If the order is shipped out, we will not be able to cancel the order. We can only refund or reship if the product arrived is damaged or tampered during transit. Or if there is a delay in arriving.

</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl"> What payments do you accept?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          We accept Paypal, E-checks, Credit cards, Amazon/Walmart Giftcards (can be purchased with VISA/Mastercard) depending upon the shipping country. And all our prices are in USD.


          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">Do you have the money back guarantee?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          Yes. Normally we ship in 6-24 hours. If the order is shipped out, we will not be able to cancel the order. We will refund or reship if the product arrived is damaged / tampered or customs problems during transit. Or if there is a delay in arriving.
          </Typography>
        </AccordionDetails>
      </Accordion>
    
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">Any more questions? Happy to help!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
          For any other questions, please contact us at <span><a href="mailto:support@kuikdose.io">support@kuikdose.io</a>. </span>We’re online 24×7! 
          </Typography>
        </AccordionDetails>
      </Accordion>
              </div>
          </div>
         
      </div>
      </div>

    </>
  );
};

export default Faqs;
