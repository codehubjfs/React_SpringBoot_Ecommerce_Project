import "../App.css";
import ProductCard from './ProductCard';
import ProductTable from './ProductTable';
import { Link } from 'react-router-dom';

function Product() {
    return (
        <>
        <br />
        <br />
            <h1 className="text-center">Product</h1>
            <hr />
            <ProductCard />
            <div className="table-responsive">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 d-flex justify-content-end mb-2">
                        <Link to="/dashboard/products/addproduct" className="active">
                            <button type="button" className="btn btn-primary" id="addbtn">Add product</button>
                        </Link>
                    </div>
                    <div className="col-12">
                        <ProductTable />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;