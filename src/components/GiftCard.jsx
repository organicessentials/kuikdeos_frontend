import React from 'react';
import { Helmet } from "react-helmet";
import gift from "../assets/gift.webp";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const GiftCard = () => {
  return (
    <>
    <div className="bredcrum_org">
        <div className="container_banner">
          <h1>Giftcards</h1>

          <span className="bredcurn_link"><a class="bread-crumb-e" href="https://kuikdose.com">Home</a> / <span class="bread-crumb-e">Giftcards</span></span>
        </div>
      </div>
      <div className='container_banner'>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">Amazon</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
            <span className='with_10'>You can purchase physical amazon giftcard for a round off order value (we will adjust with the quantity) from any of your nearest store in anywhere around the globe and send us the picture for the same at support@kuikdose.com and we will process your order.</span>          
            <span className='with_10'>To buy Amazon giftcards online, please follow the below steps:</span>
            <span className='with_10'>1: Visit amazon.com or your Amazon of your country, login or signup in just a minute.<br />
2: Click on the “Gift Cards” option in the top and click on “E-gift”<br />
3: And fill the form as mentioned below. Please the giftcard amount as a round off amount (ends with 0 or 5).</span>
<img src={gift} />
<span className='with_10'>
4: Please make sure to enter your own email id and checkout.<br />
5: Please add a payment method and make the payment.<br />
6: Once you receive the giftcard in your email just forward that email to us at support@kuikdose.com. We will pull out the details from the forwarded email id and send
</span>
<span className='with_10'>Note: Please don’t redeem the giftcard (Claim Code) in your own amazon.com/walmart account. Just forward it to us in order to process the order for you.</span>
<span className='with_10'>Queries? support@kuikdose.com</span>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">Amazon (Pay With PayPal)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
            <h4>Buy Amazon gift card worldwide using PayPal</h4>
            <span className='with_10'>If you want to pay with PayPal, there are several prepaid websites to choose from such as dundle.com or pcgamesupply.com. These websites essentially provide a platform for purchasing digital codes in a matter of seconds. You can buy any prepaid card, such as Amazon gift cards, and pay with your preferred payment method, such as PayPal. Follow the step-by-step guide to buy gift card using PayPal:</span>          
           
            <span className='with_10'>
            1. Sign up and create an account on dundle.com or pcgamesupply.com<br />
2. Select Amazon gift card from the gift card options and add it to your cart<br />
3. Checkout using PayPal or any other preferred payment method

            </span>
            
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="faqs-titl">Walmart</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-faqs">
            <span className='with_10'>You can purchase Walmart giftcard from walmart.com for your order value and send the picture of the 16 digit giftcard at support@kuikdose.com
Or you can purchase physical walmart.com giftcard for a round off order value (we will adjust with the quantity) from any of your nearest store in the US and send us the picture for the same at support@kuikdose.com and we will process your order. We will pull out the details from the forwarded email id.</span>          
        <span className='with_10'>Queries? support@kuikdose.com</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>

    </>
  )
}

export default GiftCard