import React from "react";
import { Routes, Route } from "react-router-dom";

import Registration from "../page/Registration";
import ProductForm from "../Components/ProductForm";
import SignInPage from "../page/SignInPage";
import Layouts from "../Layout/Layouts";
// import Layout from "../Layout/Layout";
import AddressPage from "../page/AddressPage";
import SellerDetail from "../page/SellerDetail";
import TaxDetail from "../page/TaxDetail";
import BankDetail from "../page/BankDetail";
import Layout1 from "../santhosh/Layouts/Layout1";
import Landing from "../santhosh/Pages/Landing";
import InventoryManagement from "../Components/InventoryManagement";
import DropdownComponent from "../santhosh/component/Product";
import TableDetails from "../santhosh/component/TableDetails";
import Support from "../santhosh/component/Support";
import UserProfileForm from "../santhosh/component/UserProfileForm";
import Layout2 from "../susmita/Layout/Layouts"
import Home from "../susmita/Pages/Home";
import Howitsworks from "../susmita/Pages/Howitsworks";
import SellOnline from "../susmita/Pages/SellOnline";
import PricingCommission from "../susmita/Pages/PricingCommission";
import Gstgrowth from "../susmita/Pages/Gstgrowth";

function AllRoutes() { 
  return (
    <div>
     
        <Routes>
          <Route path="/registration" element={<Layouts><Registration/></Layouts>} />
          <Route path="/taxdetails" element={<Layouts><TaxDetail /></Layouts>} />
          <Route path="/sellerdetails" element={<Layouts><SellerDetail /></Layouts>} /> 
          <Route path="/pickupaddress" element={<Layouts><AddressPage/></Layouts>} />
          <Route path="/bankdetails" element={<Layouts><BankDetail/></Layouts>} />
          <Route path="/addproduct" element={<Layout1><ProductForm/></Layout1>} />
          <Route path="/signin" element={<Layouts><SignInPage/></Layouts>} />
          <Route path="/home" element={<Layout1><Landing/></Layout1>}/>
          <Route path="/Inventory" element={<Layout1><InventoryManagement/></Layout1>}/>
          <Route path="/Product" element={<Layout1><DropdownComponent/></Layout1>}/>
          <Route path="/TableDetails" element={<Layout1><TableDetails/></Layout1>}/>
          <Route path="/Support" element={<Layout1><Support/></Layout1>}/>
          <Route path="/UserProfileForm" element={<Layout1><UserProfileForm/></Layout1>}/>
          <Route path="/" element={<Layout2><Home /></Layout2>} />
          <Route path="/howitsworks" element={<Layout2><Howitsworks /></Layout2>} />
          <Route path="/sellonline" element={<Layout2><SellOnline /></Layout2>} />
          <Route path="/pricingcommission" element ={<Layout2><PricingCommission /></Layout2>} />
          <Route path="/gst" element={<Layout2><Gstgrowth /></Layout2>} />
        </Routes>
     
    </div>
  );
}

export default AllRoutes;