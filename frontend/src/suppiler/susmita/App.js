import React from 'react';
import './App.css';
import { Routes,Route, BrowserRouter } from 'react-router-dom'; // Only import Route, remove Routes
// import  Home from './Pages/Home';
// import SellOnline from './Pages/SellOnline';
// import Howitsworks from './Pages/Howitsworks';
// import AppNavbar from './Layout/AppNavbar';
// import PricingCommission from './Pages/PricingCommission';
// import ShippingReturns from './component/ShippingReturns';

// import Gstgrowth from './Pages/Gstgrowth';
import Layouts from '../src/Layout/Layouts';
import { SellerRoutes } from './Routes/SellerRoutes';
// import { Layouts  }from './Layout/Layouts';
// impor}t { Layouts } from './Layout/Layouts';
// import { SellerRoutes } from './Routes/SellerRoutes';
function App() {
  return (
    
    <BrowserRouter>
    {/* <AppNavbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sellonline' element={<SellOnline />} />
        <Route path='/howitsworks' element={<Howitsworks />} />
        <Route path='/pricingcommission' element={<PricingCommission />} />
        <Route path='/shippingreturns' element={<ShippingReturns />} />
        <Route path='/gst' element={<Gstgrowth />}/>
     
        
      </Routes> */}
      <div>
        {/* <h1>Hii</h1> */}
        {/* <Layouts>
        <h1>app</h1>
        </Layouts> */}
        <Layouts>
          <SellerRoutes />
        </Layouts>
        {/* <Layouts /> */}
          
      </div>
      </BrowserRouter>

    
  );
}

export default App;