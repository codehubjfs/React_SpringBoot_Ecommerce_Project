import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPendingProductsBySupplier } from '../../../slices/productSlice';
import styles from '../SellerRequest.module.css';

function ProductRequestDetails() {
    const dispatch = useDispatch();
    const [sellerId, setSellerId] = useState(null);

    useEffect(() => {
        const sellerDetails = JSON.parse(sessionStorage.getItem('sellerDetails'));
        const id = sellerDetails ? sellerDetails.sellerId : null;
        setSellerId(id);
        if (id) {
            dispatch(fetchPendingProductsBySupplier({ sellerId: id }));
        } else {
            console.log('sellerId is undefined');
        }
    }, [dispatch]);

    const pendingProducts = useSelector((state) => state.products.products);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>{error}</div>;
    }

    return (
        <div>
            <section className="Admin-seller-requests" style={{ margin: 0, padding: 0 }}>
                <h2 className="text-center mb-4" style={{ marginTop: '60px' }}>Product Status</h2>
                <div className="container">
                    <div className="row">
                        {pendingProducts.map((product) => (
                            <div key={product.productId} className="col-md-4 mb-3">
                                <div className={styles.sellerRequest}>
                                    <div className={styles.sellerRequestBody}>
                                        <p style={{textAlign:'center'}}><strong >Product Details</strong></p>
                                        <p className={styles.sellerRequestText}><strong>Product ID:</strong> {product.productId}</p>
                                        <p className={styles.sellerRequestText}><strong>Product Name:</strong> {product.productTitle}</p>
                                        <p className={styles.sellerRequestText}><strong>Brand:</strong> {product.brand}</p>
                                        <p className={styles.sellerRequestText}><strong>Product Description:</strong> {product.description}</p>
                                        <p className={styles.sellerRequestText}><strong>Price:</strong> ${product.price}</p>
                                        <p className={styles.sellerRequestText}><strong>Quantity:</strong> {product.stock}</p>
                                        <p className={styles.sellerRequestText}><strong>Category:</strong> {product.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductRequestDetails;