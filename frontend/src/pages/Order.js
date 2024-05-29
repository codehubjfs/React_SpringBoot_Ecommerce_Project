import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersFromDb, getTotalOrders, getRevenue, getPendingOrders } from '../slices/OrderSlice';
import OrderCard from '../components/OrderCard';
import OrderTable from '../components/OrderTable';
import DescriptionCard from '../components/DescriptionCard';
import '../Order.css';

const Order = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);
  const orderStatus = useSelector((state) => state.orders.status);
  const totalOrders = useSelector((state) => state.orders.totalOrders);
  const revenue = useSelector((state) => state.orders.revenue);
  const pendingOrders = useSelector((state) => state.orders.pendingOrders);

  useEffect(() => {
    if (orderStatus === 'idle') {
      dispatch(getOrdersFromDb());
      dispatch(getTotalOrders());
      dispatch(getRevenue());
      dispatch(getPendingOrders());
    }
  }, [orderStatus, dispatch]);

  const [orderData, setOrderData] = React.useState(null);

  useEffect(() => {
    if (orderStatus === 'succeeded' && totalOrders !== null && revenue !== null && pendingOrders !== null) {
      setOrderData([
        { title: 'Total Orders', value: totalOrders, icon: 'bi bi-truck' },
        { title: 'Revenue', value: `₹${revenue}`, icon: 'bi bi-currency-rupee' },
        { title: 'Pending Orders', value: pendingOrders, icon: 'bi bi-cart-x-fill' },
      ]);
    }
  }, [orderStatus, totalOrders, revenue, pendingOrders]);

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <h1 className='mt-2'>Orders</h1>
      <hr />
      <DescriptionCard title="Welcome to the Orders Page">
        Here, you can manage all the orders placed by customers.
        Click on "View Orders" below to see the list of orders.
      </DescriptionCard>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        {orderData && orderData.map((order, index) => (
          <OrderCard key={index} title={order.title} value={order.value} icon={order.icon} />
        ))}
      </div>
      <OrderTable orders={orders} />
    </div>
  );
};

export default Order;
