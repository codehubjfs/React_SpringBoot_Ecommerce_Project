import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./Sidebar1.module.css"

function SideNew() {
  return (
    <>
      <div className="sidenew">
      <div className="sidenew-brand">
        <h4><span className="lab la-opencart" style={{ paddingTop: '20px' }}> Horizon</span></h4>
      </div>
      <div className="sidenew-menu" >
        <ul>
          <li>
            <Link to="/dashboard" className="active"><span className="las la-chalkboard"></span>
            <span>Dashboard</span></Link>
          </li>
          <li>
            <Link to="/dashboard/customer"><span className="las la-users"></span>
            <span>Customer</span></Link>
          </li>
          <li>
            <Link to="/dashboard/seller"><span className="las la-user-secret"></span>
            <span>Seller</span></Link>
          </li>
          <li>
            <Link to="/dashboard/payment"><span className="las la-coins"></span>
            <span>Payment</span></Link>
          </li>
          <li>
            <Link to="/dashboard/order"><span className="las la-truck"></span>
            <span>Order</span></Link>
          </li>
          <li>
            <Link to="/dashboard/offer"><span className="lab la-hotjar"></span>
            <span>Offer</span></Link>
          </li>
          <li>
            <Link to="/dashboard/selleroffer"><span className="lab la-hotjar"></span>
            <span>Seller Offer</span></Link>
          </li>
          <li>
            <Link to="/dashboard/offerimage"><span className="lab la-hotjar"></span>
            <span>Offer ads</span></Link>
          </li>
          <li>
          <Link to="/dashboard/utilities"><span className="las la-gift"></span>
            <span>Utilities</span></Link>
          </li>
          <li>
          <Link to="/dashboard/products"><span className="las la-gifts"></span>
            <span>Product</span></Link>
          </li>
          <li>
          <Link to="/dashboard/homeslider"><span className="las la-film"></span>
            <span>Home sliders</span></Link>
          </li>
          <li>
          <Link to="/dashboard/promocode"><span className="las la-barcode"></span>
            <span>Promo code</span></Link>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default SideNew;