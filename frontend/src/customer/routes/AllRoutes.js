import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { HomePage } from "../pages/Homepage";
// import { Cart } from "../pages/Cart";
import { SupportPage } from "../pages/SupportPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import AboutUs from "../pages/AboutUs";
import { WishlistPage } from "../pages/WishlistPage";

// import { ElectronicPage } from "../pages/ElectronicPage";
import Profile from "../pages/Profile";
import Prime from "../pages/Prime";
import SignInPage from "../pages/SignInPage";
import ProfileEditPage from "../pages/ProfileEditPage";
import Register from "../pages/RegisterPage";
import CartPage from "../pages/CartPage";
import AddressCard from "../components/AddressCard";
import YourOrders from "../pages/YourOrders";
import Clothing from "../pages/Clothing";
import Beauty from "../pages/Beauty";
import HomeAppliances from "../pages/HomeAppliances";
import Electronics from "../pages/Electronics";
import ProductDetailPage from "../pages/ProductDetailsPage";
import ProductCheckoutPage from "../pages/Checkout";
import { Layout } from "../layouts/Layout";
import ScrollToTop from "./ScrolltoTop";
export function AllRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/Homepage"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        {/* <Route path="/Cart" element={<Cart />} /> */}
        <Route
          path="/Wishlist"
          element={
            <Layout>
              <WishlistPage />
            </Layout>
          }
        />
        <Route
          path="/prime"
          element={
            <Layout>
              <Prime />
            </Layout>
          }
        />
        <Route
          path="/signin"
          element={
            <Layout>
              <SignInPage />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route
          path="/editprofile"
          element={
            <Layout>
              <ProfileEditPage />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <CartPage />
            </Layout>
          }
        />

        {/* Footer Routes  */}
        <Route
          path="/AboutUs"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/SupportPage"
          element={
            <Layout>
              <SupportPage />
            </Layout>
          }
        />
        <Route
          path="/PrivacyPolicy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
        <Route
          path="/AddressPage"
          element={
            <Layout>
              <AddressCard />
            </Layout>
          }
        />
        {/* SIVA */}
        {/* <Route path="/" element={<Electronics />} /> */}
        <Route
          path="/ElectronicPage"
          element={
            <Layout>
              <Electronics />
            </Layout>
          }
        />
        <Route
          path="/product/:categoryId/:productId"
          element={
            <Layout>
              <ProductDetailPage />
            </Layout>
          }
        />
        <Route
          path="/checkout/:categoryId/:productId"
          element={
            <Layout>
              <ProductCheckoutPage />
            </Layout>
          }
        />
        <Route
          path="/home-appliances"
          element={
            <Layout>
              <HomeAppliances />
            </Layout>
          }
        />
        <Route
          path="/beauty"
          element={
            <Layout>
              <Beauty />
            </Layout>
          }
        />
        <Route
          path="/clothing"
          element={
            <Layout>
              <Clothing />
            </Layout>
          }
        />
        <Route
          path="/your-orders"
          element={
            <Layout>
              <YourOrders />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}
export default AllRoutes;
