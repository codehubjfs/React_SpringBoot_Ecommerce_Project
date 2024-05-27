import Carousel from "../components/Carousel";
import Category from "../components/Category";
import NewArrivals from "../components/NewArrivals";
import Offer from "../components/Offer";
import Product from "../components/Product";

export function HomePage() {
  return (
    <div>
      <Category />
      <Carousel />
      <Offer />

      <NewArrivals />
      <Product />
    </div>
  );
}
