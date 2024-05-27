import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Howitsworks from "../Pages/Howitsworks";
import Gstgrowth from "../Pages/Gstgrowth";
import SellOnline from "../Pages/SellOnline";
import PricingCommission from "../Pages/PricingCommission";
export function SellerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/howitsworks" element={<Howitsworks />} />
   
      <Route path="/sellonline" element={<SellOnline />} />
      <Route path="/pricingcommission" element ={<PricingCommission />} />
      <Route path="/gst" element={<Gstgrowth />} />
    </Routes>
  );
}
