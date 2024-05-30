import React, { useState } from 'react';
import logo from '../assets/tshirt.jpg';
import logo1 from '../assets/VivoY56BlackEngine.jpg';
import logo2 from '../assets/director-s-chair.jpg';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

function InventoryManagement() {
    // Dummy data for products
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Blue Tshirt',
            brand: 'Peter England',
            price: 100.00,
            image: logo,
            quantity: 10,
            category: 'Dress'
        },
        {
            id: 2,
            name: 'VivoY56',
            brand: 'Vivo',
            price: 15000.00,
            image: logo1,
            quantity: 15,
            category: 'Mobiles'
        },
        {
            id: 3,
            name: 'chair',
            brand: 'Invacare',
            price: 20000.00,
            image: logo2,
            quantity: 20,
            category: 'Furniture'
        }
    ]);

    // Function to delete a product by ID
    const deleteProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    return (
        <div className="faq-container" style={{marginTop:'150px !important'}}>
            <div className="container">
                <h2>Inventory Management</h2>
                <br /><br />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Category</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map over the products array to generate table rows */}
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.brand}</td>
                                <td>{product.price}</td>
                                <td><img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} /></td>
                                <td>{product.quantity}</td>
                                <td>{product.category}</td>
                                <td>
                                    <div className="view-edit-delete-icons">
                                        <span className="edit-icon" style={{ color: 'black' }}>&#9998;</span>
                                        <i
                                            className="fas fa-trash-alt delete-btn"
                                            style={{ color: 'black', marginLeft: '10px', cursor: 'pointer' }}
                                            onClick={() => deleteProduct(product.id)}
                                            data-toggle="modal"
                                            data-target="#deleteProductModal"
                                        ></i>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* <Link to="/addproduct" className="active"> */}
                    <button type="button" className="btn btn-primary" id="addbtn">Add product</button>
                {/* </Link> */}
            </div>
        </div>
    );
}

export default InventoryManagement;
