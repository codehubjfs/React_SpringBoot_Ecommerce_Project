import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders, setOrdersFromSession, fetchTotalPrice } from '../../../slices/OrderSlice';
import { fetchProductsBySeller, fetchAvailableProductsCount, fetchTotalProductsCount, setProductsFromSession } from '../../../slices/productSlice';
import PieChart from './pieChart';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../dashboard.css';
import ordericon from '../photos/ordericon.jpg';
import available from '../photos/available.jpg';
import revenue from '../photos/revenue.jpg';
import listed from '../photos/listed.jpg';
import ProductCard from './ProductCard';
import UsersOverview from './UserOverView';
import PeakDays from './PeakDays';
// import SellerDetails from '../../../components/SellerDetails';


function SalesReport() {
  const dispatch = useDispatch();
  const { orders, totalPrice, status: ordersStatus, error: ordersError } = useSelector(state => state.orders);
  const { productsBySeller, availableProductsCountBySeller, totalProductsCountBySeller, status: productsStatus, error: productsError } = useSelector(state => state.products);
  const storedDetails = JSON.parse(sessionStorage.getItem('sellerDetails'));
  const productdetails = JSON.parse(sessionStorage.getItem('products'));
  const sellerId = storedDetails?.sellerId;

  useEffect(() => {
    const storedOrders = JSON.parse(sessionStorage.getItem('orders'));
    console.log(orders.length);
    if (storedOrders && storedOrders.sellerId === sellerId) {
      dispatch(setOrdersFromSession(storedOrders));
    } else {
      dispatch(fetchOrders(sellerId));
    }

    const storedProducts = JSON.parse(sessionStorage.getItem('products'));
    if (storedProducts && storedProducts.sellerId === sellerId) {
      dispatch(setProductsFromSession(storedProducts));
    } else {
      dispatch(fetchProductsBySeller(sellerId));
    }

    dispatch(fetchAvailableProductsCount(sellerId));
    dispatch(fetchTotalProductsCount(sellerId));
    dispatch(fetchTotalPrice(sellerId));
  }, [dispatch, sellerId]);

  if (ordersStatus === 'loading' || productsStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (ordersStatus === 'failed' || productsStatus === 'failed') {
    return <div>Error: {ordersError || productsError}</div>;
  }

  const products = productsBySeller?.[sellerId] || [];
  const availableCount = availableProductsCountBySeller?.[sellerId] || 0;
  const totalProductsCount = totalProductsCountBySeller?.[sellerId] || 0;
  const totalRevenue = totalPrice?.[sellerId] || 0;
console.log("producttitle" + products.productproductTitle);
  const productData = [
    { label: 'Product Ordered', value: orders.length },
    { label: 'Product Available', value: availableCount },
    { label: 'Total Revenue', value: totalPrice},
    { label: 'Total Listing', value: totalProductsCount },
  ];

  const stockDetails = orders.map((order, index) => ({
    id: index + 1,
    productName: order.productName,
    inStock: order.quantity,
   
  }));

  return (
    <Container fluid className="seller-dashboard">
      <Row className="mb-4">
        <Col>
          <h2 className="seller-dashboard">Sales Report</h2>
        </Col>
      </Row>

      <Row>
        {productData.map((item, index) => (
          <Col lg={3} className="mb-4" key={index}>
            <Card className="shadow-sm seller-stat-card card-bg-gray" id="cardhover">
              <Card.Body className="d-flex align-items-center">
                <img
                  src={[ordericon, available, revenue, listed][index]}
                  alt={item.label}
                  className="rounded-circle mb-3 card-icon"
                  style={{ height: '70px', width: '70px' }}
                />
                <div className="ml-3">
                  <Card.Title className="seller-card-title">{item.label}</Card.Title>
                  <Card.Text className="seller-card-text">{item.value}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mb-4">
      <Col lg={6} className="mb-4">
        <Card className="shadow-sm seller-stat-card2 card-bg-gray card-fixed-height">
          <Card.Body>
            <PieChart sellerId={sellerId} />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} className="mb-4">
        <Card className="shadow-sm seller-stat-card2 card-bg-gray card-fixed-height">
          <div style={{ textAlign: 'center' }}>
            <h2>Stock Details</h2>
          </div>
          <div style={{ padding: '20px', height: 'calc(100% - 52px)', overflowY: 'auto' }}>
            <Row>
              {products.map(detail => (
                <Col key={detail.id} md={12} className="mb-3">
                  <ProductCard 
                    productName={detail.productTitle} 
                    inStock={detail.stock} 
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Card>
      </Col>
    </Row>

    <Row className="mb-4">
      <Col lg={6} className="mb-4" style={{ display: 'flex', justifyContent: 'center' }}>
        <UsersOverview sellerId={sellerId}  />
      </Col>
      <Col lg={6} className="mb-4" style={{ display: 'flex', justifyContent: 'center' }}>
        <Card className="shadow-sm seller-stat-card2 card-bg-gray" style={{ width: '700px', height: '400px' }}>
          <Card.Body>
            <PeakDays sellerId={sellerId} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container>
  );
}

export default SalesReport;