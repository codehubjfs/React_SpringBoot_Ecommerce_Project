import ECarousel from "../components/ECarousel";
import ElectronicProduct from "../components/ElectronicProduct";
import Category from "../components/Category";

export function ElectronicPage() {
  return (
    <div>
      <Category />
      <ECarousel />
      <ElectronicProduct />
    </div>
  );
}
