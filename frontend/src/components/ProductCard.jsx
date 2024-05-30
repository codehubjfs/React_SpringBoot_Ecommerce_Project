import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderCard from './OrderCard';
import './Order.css';
import { getTotalProducts, getAvailableProducts, getOutofStockProducts } from '../slices/productSlice';

function ProductCard() {
    const dispatch = useDispatch();
    const totalProduct = useSelector((state) => state.products.totalProducts);
    const availableProduct = useSelector((state) => state.products.availableProducts);
    const outofStock = useSelector((state) => state.products.outofStockProducts);

    useEffect(() => {
        dispatch(getTotalProducts());
        dispatch(getAvailableProducts());
        dispatch(getOutofStockProducts());
    }, [dispatch]);

    return (
        <div className="container-fluid">
            <div className="row">
                    <OrderCard title="Total Products" value={String(totalProduct)} icon='las la-boxes' />
                    <OrderCard title="Available " value={String(availableProduct)} icon='las la-boxes' />
                    <OrderCard title="Out of Stock" value={String(outofStock)} icon='las la-boxes' />

            </div>
        </div>
    );
}

export default ProductCard;