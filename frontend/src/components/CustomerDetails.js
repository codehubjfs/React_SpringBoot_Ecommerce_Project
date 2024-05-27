import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomers, deleteCustomer, setSelectedCustomer } from '../slices/customerSlice';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import $ from 'jquery';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import ViewCustomerModal from './ViewCustomerModal';
import DeleteCustomerModal from './DeleteCustomerModal';
import DescriptionCard from './DescriptionCard ';

function CustomerDetails() {
    const dispatch = useDispatch();
    const customers = useSelector((state) => state.customers.customers);
    const customerStatus = useSelector((state) => state.customers.status);
    const error = useSelector((state) => state.customers.error);
    const selectedCustomer = useSelector((state) => state.customers.selectedCustomer);

    const [viewModalShow, setViewModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    
    useEffect(() => {
        if (customerStatus === 'idle') {
            dispatch(fetchCustomers());
        }
       
    }, [customerStatus, dispatch]);
    useEffect(() => {
      console.log(customers.length);
      if (customers.length > 0) {
          const table = $('#customerTable').DataTable();

          // Cleanup DataTable on component unmount or data change
          
      }
  }, [customers]);
    const viewCustomer = (customer) => {
        dispatch(setSelectedCustomer(customer));
        setViewModalShow(true);
    };

    const openDeleteModal = (customer) => {
        console.log('Delete modal opened'); // Check if the function is triggered
        dispatch(setSelectedCustomer(customer));
        setDeleteModalShow(true);
        console.log('Delete modal show state after set:', deleteModalShow);
    };

    const handleDeleteCustomer = () => {
        console.log('Deleting customer'); // Check if the function is triggered
        dispatch(deleteCustomer(selectedCustomer.id));
        setDeleteModalShow(false);
    };

    console.log('Delete modal show state:', deleteModalShow); // Check the state value
    console.log('Selected customer:', selectedCustomer); // Check the selected customer value

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col lg={12}>
                    <div className="mt-4">
                        <h2 className='text-center'>Customer Management</h2>
                        <hr />
                        <DescriptionCard title="Welcome to the Customer Management Page">
                            Manage all registered customers, view their details, and delete them if needed.
                            Click on "View Customers" to get started.
                        </DescriptionCard>
                        {error && <p className="text-danger">{error}</p>}
                        <Table id="customerTable" striped bordered hover>
                            <thead>
                                <tr>
                                    <th className="text-center">ID</th>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Email</th>
                                    <th className="text-center">Phone</th>
                                    <th className="text-center">Membership</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer) => (
                                    <tr key={customer.id}>
                                        <td className="text-center">{customer.id}</td>
                                        <td className="text-left">{customer.fname}</td>
                                        <td className="text-center">{customer.email}</td>
                                        <td className="text-center">{customer.phone}</td>
                                        <td className="text-center">{customer.membership}</td>
                                        <td style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-around' }}>
                                            <i className="fas fa-eye ee mr-2"  onClick={() => viewCustomer(customer)}></i>
                                            <i className="fas fa-trash-alt ee" onClick={() => openDeleteModal(customer)}></i>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
            <ViewCustomerModal
                show={viewModalShow}
                onHide={() => setViewModalShow(false)}
                selectedCustomer={selectedCustomer}
            />
            <DeleteCustomerModal
                show={deleteModalShow}
                onHide={() => setDeleteModalShow(false)}
                selectedCustomer={selectedCustomer}
                onDelete={handleDeleteCustomer} // Make sure onDelete is passed here
            />
        </Container>
    );
}

export default CustomerDetails;
