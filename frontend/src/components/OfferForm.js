// // OfferForm.js
// import React from 'react';
// import { Button, Col, Form, Row } from 'react-bootstrap';

// const OfferForm = ({ formData, onChange }) => {
//   const { offerName, productID, categoryID, discount, startDate, endDate } = formData;

//   return (
//     <Form>
//       <Form.Group as={Row} className="mb-3" controlId="formOfferName">
//         <Form.Label column sm="2">
//           Offer Name
//         </Form.Label>
//         <Col sm="10">
//           <Form.Control type="text" value={offerName} onChange={(e) => onChange('offerName', e.target.value)} />
//         </Col>
//       </Form.Group>
//       <Form.Group as={Row} className="mb-3" controlId="formProductID">
//         <Form.Label column sm="2">
//           Product ID/Name
//         </Form.Label>
//         <Col sm="10">
//           <Form.Control type="text" value={productID} onChange={(e) => onChange('productID', e.target.value)} />
//         </Col>
//       </Form.Group>
//       <Form.Group as={Row} className="mb-3" controlId="formCategoryID">
//         <Form.Label column sm="2">
//           Category ID/Name
//         </Form.Label>
//         <Col sm="10">
//           <Form.Control type="text" value={categoryID} onChange={(e) => onChange('categoryID', e.target.value)} />
//         </Col>
//       </Form.Group>
//       <Form.Group as={Row} className="mb-3" controlId="formDiscount">
//         <Form.Label column sm="2">
//           Discount (%)
//         </Form.Label>
//         <Col sm="10">
//           <Form.Control type="number" value={discount} onChange={(e) => onChange('discount', e.target.value)} />
//         </Col>
//       </Form.Group>
//       <Form.Group as={Row} className="mb-3" controlId="formStartDate">
//         <Form.Label column sm="2">
//           Start Date
//         </Form.Label>
//         <Col sm="10">
//           <Form.Control type="date" value={startDate} onChange={(e) => onChange('startDate', e.target.value)} />
//         </Col>
//       </Form.Group>
//       <Form.Group as={Row} className="mb-3" controlId="formEndDate">
//         <Form.Label column sm="2">
//           End Date
//         </Form.Label>
//         <Col sm="10">
//           <Form.Control type="date" value={endDate} onChange={(e) => onChange('endDate', e.target.value)} />
//         </Col>
//       </Form.Group>
//     </Form>
//   );
// };

// export default OfferForm;
