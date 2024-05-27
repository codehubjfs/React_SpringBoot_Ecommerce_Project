import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Customer from "../pages/Customer";
import SellerPage from "../pages/SellerPage";
import PaymentPage from "../pages/PaymentPage";
import SellerDetailsPage from "../pages/SellerDetailsPage";
import ProfilePage from "../pages/ProfilePage";
import { NotificationModal } from "../components/NotificationModal";
import Order from "../pages/Order";
import Offer from "../pages/Offer";
import OfferImagePage from "../pages/OfferImage";
import HomeSlider from "../pages/HomeSlider";
import SellerOffer from "../pages/SellerOffer";
import Category from "../components/Category";
import Utilities from "../components/Utilities";
import Product from "../components/Product";
import PromoCodeManagement from "../components/Promocode";
import SubCategories from "../components/Subcategories";
import ProductForm from "../components/ProductForm";
import Layout1 from "../layouts/Layout";
import AdminLogin from "../components/AdminLogin";
import SupportPage1 from "../components/SupportPage";


// supplier
import Registration from "../suppiler/page/Registration";
import ProductForm1 from "../suppiler/Components/ProductForm";
import SignInPage from "../suppiler/page/SignInPage";
import Layouts from "../suppiler/Layout/Layouts";
import AddressPage from "../suppiler/page/AddressPage";
import SellerDetail from "../suppiler/page/SellerDetail";
import TaxDetail from "../suppiler/page/TaxDetail";
import BankDetail from "../suppiler/page/BankDetail";
import Layout3 from "../suppiler/santhosh/Layouts/Layout1";
import Landing from "../suppiler/santhosh/Pages/Landing";
import InventoryManagement from "../suppiler/Components/InventoryManagement";
import DropdownComponent from "../suppiler/santhosh/component/Product";
import TableDetails from "../suppiler/santhosh/component/TableDetails";
import Support from "../suppiler/santhosh/component/Support";
import UserProfileForm from "../suppiler/santhosh/component/UserProfileForm";
import Layout2 from "../suppiler/susmita/Layout/Layouts";
import Home from "../suppiler/susmita/Pages/Home";
import Howitsworks from "../suppiler/susmita/Pages/Howitsworks";
import SellOnline from "../suppiler/susmita/Pages/SellOnline";
import PricingCommission from "../suppiler/susmita/Pages/PricingCommission";
import Gstgrowth from "../suppiler/susmita/Pages/Gstgrowth";
import ProductRequestDetails from "../suppiler/santhosh/component/ProductRequestDetails";
import { FormProvider } from '../suppiler/context/FormContext';

// customer
import { HomePage } from "../customer/pages/Homepage";
import Cart from "../customer/components/cart";
import { SupportPage } from "../customer/pages/SupportPage";
import PrivacyPolicy from "../customer/pages/PrivacyPolicy";
import AboutUs from "../customer/pages/AboutUs";
import { WishlistPage } from "../customer/pages/WishlistPage";
import { ElectronicPage } from "../customer/pages/ElectronicPage";
import Profile from "../customer/pages/Profile";
import Prime from "../customer/pages/Prime";
import ProfileEditPage from "../customer/pages/ProfileEditPage";
import Register from "../customer/pages/RegisterPage";
import CartPage from "../customer/pages/CartPage";
import AddressCard from "../customer/components/AddressCard";
import YourOrders from "../customer/pages/YourOrders";
import Clothing from "../customer/pages/Clothing";
import Beauty from "../customer/pages/Beauty";
import HomeAppliances from "../customer/pages/HomeAppliances";
import Electronics from "../customer/pages/Electronics";
import ProductDetailPage from "../customer/pages/ProductDetailsPage";
import ProductCheckoutPage from "../customer/pages/Checkout";
import  Layout4 from "../customer/layouts/Layout4";
import SignInPage1 from "../customer/pages/SignInPage";


function AllRoutes() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <FormProvider>
      <Routes>
        <Route path="/adminhome" element={<Layout4><AdminLogin /></Layout4>} />
        <Route path="/dashboard" element={<Layout1><Dashboard /></Layout1>} />
        <Route path="/dashboard/customer" element={<Layout1><Customer /></Layout1>} />
        <Route path="/dashboard/seller" element={<Layout1><SellerPage /></Layout1>} />
        <Route path="/dashboard/payment" element={<Layout1><PaymentPage /></Layout1>} />
        <Route path="/seller/sellerdetails" element={<Layout1><SellerDetailsPage /></Layout1>} />
        <Route path="/profile1" element={<Layout1><ProfilePage /></Layout1>} />
        <Route path="/dashboard/order" element={<Layout1><Order /></Layout1>} />
        <Route path="/dashboard/offer" element={<Layout1><Offer /></Layout1>} />
        <Route path="/dashboard/selleroffer" element={<Layout1><SellerOffer /></Layout1>} />
        <Route path="/dashboard/offerimage" element={<Layout1><OfferImagePage /></Layout1>} />
        <Route path="/dashboard/homeslider" element={<Layout1><HomeSlider /></Layout1>} />
        <Route path="/dashboard/products" element={<Layout1><Product /></Layout1>} />
        <Route path="/dashboard/utilities" element={<Layout1><Utilities /></Layout1>} />
        <Route path="/dashboard/promocode" element={<Layout1><PromoCodeManagement /></Layout1>} />
        <Route path="/dashboard/adminsupport" element={<Layout1><SupportPage1/></Layout1>} />
        <Route path="/dashboard/utilities/category" element={<Layout1><Category /></Layout1>} />
        <Route path="/dashboard/utilities/subcategory" element={<Layout1><SubCategories /></Layout1>} />
        <Route path="/dashboard/products/addproduct" element={<Layout1><ProductForm /></Layout1>} />
        {/* <Route path="/notification" element={<NotificationModal/>} /> */}

        {/* supplier routes */}
        <Route path="/registration" element={<Layouts><Registration /></Layouts>} />
        <Route path="/taxdetails" element={<Layouts><TaxDetail /></Layouts>} />
        <Route path="/sellerdetails" element={<Layouts><SellerDetail /></Layouts>} />
        <Route path="/pickupaddress" element={<Layouts><AddressPage /></Layouts>} />
        <Route path="/bankdetails" element={<Layouts><BankDetail /></Layouts>} />
        <Route path="/addproduct" element={<Layouts><ProductForm1 /></Layouts>} />
        <Route path="/signin" element={<Layouts><SignInPage /></Layouts>} />
        <Route path="/home" element={<Layout3><Landing /></Layout3>} />
        <Route path="/Inventory" element={<Layout3><InventoryManagement /></Layout3>} />
        <Route path="/Product" element={<Layout3><DropdownComponent /></Layout3>} />
        <Route path="/TableDetails" element={<Layout3><TableDetails /></Layout3>} />
        <Route path="/Support" element={<Layout3><Support /></Layout3>} />
        <Route path="/UserProfileForm" element={<Layout3><UserProfileForm /></Layout3>} />
        <Route path="/homesupplier" element={<Layout2><Home /></Layout2>} />
        <Route path="/howitsworks" element={<Layout2><Howitsworks /></Layout2>} />
        <Route path="/sellonline" element={<Layout2><SellOnline /></Layout2>} />
        <Route path="/pricingcommission" element={<Layout2><PricingCommission /></Layout2>} />
        <Route path="/gst" element={<Layout2><Gstgrowth /></Layout2>} />
        {/* <Route path="/ProductRequest" element={<Layout3><SellerPage /></Layout3>} /> */}
        <Route path="/ProductRequest" element={<Layout3>< ProductRequestDetails /></Layout3>} />
        {/* customer routes */}
        <Route path="/" element={<Layout4><HomePage /></Layout4>} />
        <Route path="/Homepage" element={<Layout4><HomePage /></Layout4>} />
        <Route path="/Wishlist" element={<Layout4><WishlistPage /></Layout4>} />
        <Route path="/prime" element={<Layout4><Prime /></Layout4>} />
        <Route path="/signin" element={<Layout4><SignInPage1 /></Layout4>} />
        <Route path="/profile" element={<Layout4><Profile /></Layout4>} />
        <Route path="/editprofile" element={<Layout4><ProfileEditPage /></Layout4>} />
        <Route path="/register" element={<Layout4><Register /></Layout4>} />
        <Route path="/cart" element={<Layout4><CartPage /></Layout4>} />
        <Route path="/AboutUs" element={<Layout4><AboutUs /></Layout4>} />
        <Route path="/SupportPage" element={<Layout4><SupportPage /></Layout4>} />
        <Route path="/PrivacyPolicy" element={<Layout4><PrivacyPolicy /></Layout4>} />
        <Route path="/AddressPage" element={<Layout4><AddressCard /></Layout4>} />
        <Route path="/ElectronicPage" element={<Layout4><Electronics /></Layout4>} />
        <Route path="/product/:categoryId/:productId" element={<Layout4><ProductDetailPage /></Layout4>} />
        <Route path="/checkout/:categoryId/:productId" element={<Layout4><ProductCheckoutPage /></Layout4>} />
        <Route path="/home-appliances" element={<Layout4><HomeAppliances /></Layout4>} />
        <Route path="/beauty" element={<Layout4><Beauty /></Layout4>} />
        <Route path="/clothing" element={<Layout4><Clothing /></Layout4>} />
        <Route path="/your-orders" element={<Layout4><YourOrders/></Layout4>} />

      </Routes>
      </FormProvider>
      
      {/* Render the NotificationModal */}
      <NotificationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

    </>
  );
}

export default AllRoutes;
