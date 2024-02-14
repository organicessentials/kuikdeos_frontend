import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import ViewAll from './ViewAll';
import Products from './Products';
import Rating from './Rating';
import Reviews from './Reviews';
import { setShowPopup } from '../features/popupSlice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {

  const popup = useSelector((state)=>state.popup.showPopup)
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setShowPopup(true));
    }, 10000);
  }, [dispatch]);


  

  return (
    <>
      
        
        <Banner />
      <ViewAll />

      <Products />
      <Rating />
      <Reviews />

      
    </>
  );
};

export default Home;
