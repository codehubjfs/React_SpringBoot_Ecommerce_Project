// import DashboardCards from '../components/DashboardCards';
// import PeakDays from '../components/PeakDays';
// import ProductCharts from '../components/ProductCharts';
//  import TodayStatus from '../components/TodayStatus';
// import "../../src/App.css";

// function Dashboard(){
//     return (
//         <div>
//             <h2 className='text-center' style={{marginTop:'10px',marginBottom:'10px'}}>Dashboard</h2>
//             <hr/>

//             <div className="row" style={{marginTop:'50px'}}>
//                 <div className="col-md-6 mb-3 d-flex align-items-stretch">
//                     <div  className='Admin1-card-body w-100'>
//                         <TodayStatus />
//                     </div>
//                 </div>
//                 <div className="col-md-6 mb-3 d-flex align-items-stretch">
//                     <div className='Admin1-card-body w-100'>
//                         <h2>Peak Days</h2>
//                         <PeakDays/>
//                     </div>
//                 </div>
//             </div>

//             <DashboardCards/>
//             <ProductCharts/>
//         </div>
//     )
// }

// export default Dashboard;




// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import UsersOverview from '../components/UsersOverview';
// import UsersByDevice from '../components/UsersByDevice';
// import TodayStatus from '../components/TodayStatus';
// import PeakDays from '../components/PeakDays';
// import './Dashboard.css';
// import product from "../assets/product.jpeg";
// import order from "../assets/order.png";
// import revenue from "../assets/salary.png";
// import customer from "../assets/customers.png";

// function Dashboard() {
//   const [data, setData] = useState({
//     customers: 0,
//     products: 0,
//     orders: 0,
//     revenue: 0,
//   });

//   useEffect(() => {
//     // Simulate fetching data
//     const fetchData = () => {
//       // You can replace this with your actual data fetching logic
//       const fetchedData = {
//         customers: 2390,
//         products: 182,
//         orders: 8147,
//         revenue: 20029,
//       };
//       setData(fetchedData);
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//    <br></br>
//     <Container fluid className="dashboard p-4">
//       <Row className="mb-4">
//         <Col>
//           <h2 className="dashboard">Dashboard</h2>
//         </Col>
//       </Row>
//       <Row className="mb-4 text-center">
//       <Col lg={3} md={6} sm={12} className="mb-4">
//           <Card className="shadow-sm stat-card card-bg-gray">
//             <Card.Body className="d-flex align-items-center">
//               <img
//                 src={customer}
//                 alt=""
//                 className="rounded-circle mb-3 card-icon"
//                 style={{ height: '70px', width: '70px' }}
//               />
//               <div className="ml-3">
//                 <Card.Title id="dashboard-card">Customer</Card.Title>
//                 <Card.Text className="card-text">{data.customers}</Card.Text>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col lg={3} md={6} sm={12} className="mb-4">
//           <Card className="shadow-sm stat-card card-bg-gray">
//             <Card.Body className="d-flex align-items-center">
//               <img
//                 src={product}
//                 alt=""
//                 className="rounded-circle mb-3 card-icon"
//                 style={{ height: '70px', width: '70px' }}
//               />
//               <div className="ml-3">
//                 <Card.Title id="dashboard-card">Products</Card.Title>
//                 <Card.Text className="card-text">{data.products}</Card.Text>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col lg={3} md={6} sm={12} className="mb-4">
//           <Card className="shadow-sm stat-card card-bg-gray">
//             <Card.Body className="d-flex align-items-center">
//               <img
//                 src={order}
//                 alt=""
//                 className="rounded-circle mb-3 card-icon"
//                 style={{ height: '70px', width: '70px' }}
//               />
//               <div className="ml-3">
//                 <Card.Title id="dashboard-card">Order</Card.Title>
//                 <Card.Text className="card-text">{data.orders}</Card.Text>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col lg={3} md={6} sm={12} className="mb-4">
//           <Card className="shadow-sm stat-card card-bg-gray">
//             <Card.Body className="d-flex align-items-center">
//               <img
//                 src={revenue}
//                 alt=""
//                 className="rounded-circle mb-3 card-icon"
//                 style={{ height: '70px', width: '70px' }}
//               />
//               <div className="ml-3">
//                 <Card.Title id="dashboard-card">Revenue</Card.Title>
//                 <Card.Text className="card-text">{data.revenue}</Card.Text>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mb-4">
//         <Col md={6} className="mb-3 d-flex align-items-stretch">
//           <Card className="shadow-sm w-100 todo-card card-bg-gray">
//             <Card.Body>
//               <TodayStatus />
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col lg={4}>
//           <div className="chart-card">
//             <UsersByDevice />
//           </div>
//         </Col>
        
//       </Row>


//       <Row className="mb-4">
//         <Col lg={6}>
//           <div className="chart-card">
//             <UsersOverview />
//           </div>
//         </Col>
//         <Col md={6} className="mb-3 d-flex align-items-stretch">
//           <Card className="shadow-sm w-100 schedule-card card-bg-green">
//             <Card.Body>
//               <h2>Peak Days</h2>
//               <PeakDays />
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
      
//       {/* <Row className="mb-4">
//         <Col md={6} className="mb-3 d-flex align-items-stretch">
//           <Card className="shadow-sm w-100 revenue-card card-bg-blue">
//             <Card.Body>
//               <h2>Additional Content</h2>
//               <p>Here you can add some additional content or widgets to fill the space.</p>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={6} className="mb-3 d-flex align-items-stretch">
//           <Card className="shadow-sm w-100 revenue-card card-bg-yellow">
//             <Card.Body>
//               <h2>More Information</h2>
//               <p>Use this space to provide more details or insights about the data.</p>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row> */}
//     </Container>
//     </>
//   );
// }

// export default Dashboard;



// Dashboard.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import UsersOverview from '../components/UsersOverview';
import UsersByDevice from '../components/UsersByDevice';
import TodayStatus from '../components/TodayStatus';
import PeakDays from '../components/PeakDays';
import { fetchCustomers } from '../slices/customerSlice';
import { fetchAllProducts } from '../slices/productSlice';
import { getOrdersFromDb } from '../slices/OrderSlice'; // Import getOrdersFromDb
import { fetchAllPayments, fetchTotalRevenue } from '../slices/paymentSlice'; // Import fetchAllPayments
import product from '../assets/product.jpeg';
import order from '../assets/order.png';
import revenue from '../assets/salary.png';
import customer from '../assets/customers.png';
import './Dashboard.css';
import TopSellersOverview from '../components/TopSellerOverview';

function Dashboard() {
  const dispatch = useDispatch();
  const { customers, status: customerStatus } = useSelector((state) => state.customers);
  const { products, status: productStatus } = useSelector((state) => state.products);
  const { orders, status: orderStatus } = useSelector((state) => state.orders); // Get orders from state
  const { totalRevenue, status: revenueStatus } = useSelector((state) => state.payments); // Get total revenue from state

  useEffect(() => {
    if (customerStatus === 'idle') {
      dispatch(fetchCustomers());
    }
    if (productStatus === 'idle') {
      dispatch(fetchAllProducts());
    }
    if (orderStatus === 'idle') {
      dispatch(getOrdersFromDb());
    }
    if (revenueStatus === 'idle') {
      dispatch(fetchTotalRevenue());
    }
  }, [dispatch, customerStatus, productStatus, orderStatus, revenueStatus]);

  const customerCount = customers.length;
  const productCount = products.length;
  const orderCount = orders.length; // Get order count dynamically

  return (
    <>
      <br />
      <Container fluid className="dashboard p-4">
        <Row className="mb-4">
          <Col>
            <h2 className="dashboard text-center">Dashboard</h2>
            <hr></hr>
          </Col>
        </Row>
        <Row className="mb-4 text-center">
          <Col lg={3} md={6} sm={12} className="mb-4">
            <Card className="shadow-sm stat-card card-bg-gray">
              <Card.Body className="d-flex align-items-center">
                <img src={customer} alt="" className="rounded-circle mb-3 card-icon" style={{ height: '70px', width: '70px' }} />
                <div className="ml-3">
                  <Card.Title id="dashboard-card">Customer</Card.Title>
                  <Card.Text className="card-text">{customerCount}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12} className="mb-4">
            <Card className="shadow-sm stat-card card-bg-gray">
              <Card.Body className="d-flex align-items-center">
                <img src={product} alt="" className="rounded-circle mb-3 card-icon" style={{ height: '70px', width: '70px' }} />
                <div className="ml-3">
                  <Card.Title id="dashboard-card">Products</Card.Title>
                  <Card.Text className="card-text">{productCount}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12} className="mb-4">
            <Card className="shadow-sm stat-card card-bg-gray">
              <Card.Body className="d-flex align-items-center">
                <img src={order} alt="" className="rounded-circle mb-3 card-icon" style={{ height: '70px', width: '70px' }} />
                <div className="ml-3">
                  <Card.Title id="dashboard-card">Order</Card.Title>
                  <Card.Text className="card-text">{orderCount}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12} className="mb-4">
            <Card className="shadow-sm stat-card card-bg-gray">
              <Card.Body className="d-flex align-items-center">
                <img src={revenue} alt="" className="rounded-circle mb-3 card-icon" style={{ height: '70px', width: '70px' }} />
                <div className="ml-3">
                  <Card.Title id="dashboard-card">Revenue</Card.Title>
                  <Card.Text className="card-text">₹{totalRevenue}</Card.Text> {/* Display total revenue */}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6} className="mb-3 d-flex align-items-stretch">
            <Card className="shadow-sm w-100 todo-card card-bg-gray">
              <Card.Body>
                <TodayStatus />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <div className="chart-card">
              <UsersByDevice />
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col lg={6}>
            <div className="chart-card">
              <TopSellersOverview />
              {/* <UsersOverview /> */}
            </div>
          </Col>
          <Col md={6} className="mb-3 d-flex align-items-stretch">
            <Card className="shadow-sm w-100 schedule-card card-bg-green">
              <Card.Body>
                <h2>Peak Months</h2>
                <PeakDays />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
