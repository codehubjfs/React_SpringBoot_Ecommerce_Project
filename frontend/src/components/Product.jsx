import "../App.css";
import ProductCard from './ProductCard';
import ProductTable from './ProductTable';


function Product() {
    return (
        <>
            <h1 className="text-center">Product</h1>
            <hr />
            <ProductCard />
            <div className="table-responsive">
                <ProductTable />   
            </div>
        </>
    );
}

export default Product;