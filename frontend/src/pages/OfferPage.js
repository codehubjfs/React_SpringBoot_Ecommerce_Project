import React from "react";
import Offer from "../pages/Offer";
import  Sidebar  from '../components/Sidebar.js';
import Navbar from '../components/Navbar';

export default function OfferPage() {
  return (
    <><br></br>
    <div className='main-content'>
      
      <div style={{ marginLeft: '125px' }} className="offer-container">
        <Offer/>
      </div>
    </div>
    </>
  );
}
