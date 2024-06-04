// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// // import { fetchOrders, setOrdersFromSession } from '../../slice/ordersSlice';
// // import { fetchProducts, setProductsFromSession } from '../../slice/productsSlice';
// import PieChart from './pieChart';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import '../dashboard.css';
// import ordericon from '../photos/ordericon.jpg';
// import available from '../photos/available.jpg';
// // import revenue from '../photos/revenue.png';
// import listed from '../photos/listed.jpg';
// import ProductCard from './ProductCard';
// import UsersOverview from './UserOverView';
// import PeakDays from './PeakDays';
// import SellerDetails from '../../../components/SellerDetails';

// function SalesReport() {
//   const dispatch = useDispatch();
//   const { orders, status: ordersStatus, error: ordersError } = useSelector(state => state.orders);
//   const { products, status: productsStatus, error: productsError } = useSelector(state => state.products);
//   const storedDetails = JSON.parse(sessionStorage.getItem('sellerDetails'));
//   const sellerId = storedDetails.sellerId;

//   useEffect(() => {
//     const storedOrders = JSON.parse(sessionStorage.getItem('orders'));
//     if (storedOrders && storedOrders.sellerId === sellerId) {
//       dispatch(setOrdersFromSession(storedOrders));
//     } else {
//       dispatch(fetchOrders(sellerId));
//     }

//     const storedProducts = JSON.parse(sessionStorage.getItem('products'));
//     if (storedProducts && storedProducts.sellerId === sellerId) {
//       dispatch(setProductsFromSession(storedProducts));
//     } else {
//       dispatch(fetchProducts(sellerId));
//     }
//   }, [dispatch, sellerId]);

  

//   if (ordersStatus === 'loading' || productsStatus === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (ordersStatus === 'failed' || productsStatus === 'failed') {
//     return <div>Error: {ordersError || productsError}</div>;
//   }

  
//   const productData = [
//     { label: 'Product Ordered', value: orders.length },
//     { label: 'Product Available', value: products.filter(product => product.status === 'available' && product.supplierId === sellerId).length },
//     { label: 'Total Revenue', value: orders.reduce((sum, order) => sum + order.totalPrice, 0) },
//     { label: 'Total Listing', value: orders.length },
//   ];

//   const stockDetails = orders.map((order, index) => ({
//     id: index + 1,
//     productName: order.productName,
//     inStock: order.inStock,
//     outOfStock: order.outOfStock,
//   }));

//   return (
//     <Container fluid className="seller-dashboard">
//       <Row className="mb-4">
//         <Col>
//           <h2 className="seller-dashboard">Sales Report</h2>
//         </Col>
//       </Row>

//       <Row>
//         {productData.map((item, index) => (
//           <Col lg={3} className="mb-4" key={index}>
//             <Card className="shadow-sm seller-stat-card card-bg-gray" id="cardhover">
//               <Card.Body className="d-flex align-items-center">
//                 <img
//                   src={[ordericon, available, revenue, listed][index]}
//                   alt={item.label}
//                   className="rounded-circle mb-3 card-icon"
//                   style={{ height: '70px', width: '70px' }}
//                 />
//                 <div className="ml-3">
//                   <Card.Title className="seller-card-title">{item.label}</Card.Title>
//                   <Card.Text className="seller-card-text">{item.value}</Card.Text>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       <Row className="mb-4">
//         <Col lg={6} className="mb-4">
//           <Card className="shadow-sm seller-stat-card2 card-bg-gray">
//             <Card.Body>
//               <PieChart />
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col lg={6} className="mb-4">
//           <Card className="shadow-sm seller-stat-card2 card-bg-gray">
//             <div style={{ textAlign: 'center' }}>
//               <h2>Stock Details</h2>
//             </div>
//             <div style={{ padding: '20px' }}>
//               <Row>
//                 {stockDetails.map(detail => (
//                   <Col key={detail.id} md={12} className="mb-3">
//                     <ProductCard 
//                       productName={detail.productName} 
//                       inStock={detail.inStock} 
//                       outOfStock={detail.outOfStock}
//                     />
//                   </Col>
//                 ))}
//               </Row>
//             </div>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mb-4">
//         <Col lg={6} className="mb-4">
//           <UsersOverview />
//         </Col>
//         <Col lg={6} className="mb-4">
//           <Card className="shadow-sm seller-stat-card2 card-bg-gray">
//             <Card.Body>
//               <PeakDays />
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default SalesReport;