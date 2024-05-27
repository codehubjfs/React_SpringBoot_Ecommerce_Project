import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "../Pages/Landing";
import Support from "../component/Support";
import ProductQA from "../component/Product";
import Report from "../component/Report";
import TableDetails from "../component/TableDetails";
import UserProfileForm from "../component/UserProfileForm";
import InventoryManagement from "../component/InventoryManagement";
function AllRoutes() { 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Support" element={<Support />}/>
        <Route path="/Product" element={<ProductQA />}/>
        <Route path="/TableDetails" element={<TableDetails />}/>
        <Route path="/UserProfileForm" element={<UserProfileForm />}/>
        <Route Path="/InventoryManagement" element={<InventoryManagement />}/>
      </Routes>
    </div>
  );
}

export default AllRoutes;
