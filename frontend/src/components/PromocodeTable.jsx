import React, { useState,useEffect} from 'react';
import PromocodeForm from './PromocodeForm';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery';

const PromoCodeTable = () => {
    useEffect(() => {
        $(document).ready(() => {
            $('#promocodeTable').DataTable();
        });
    }, []);
    // Sample data
    const [selectedPromo, setSelectedPromo] = useState(null);
    const data = [
        { id: 1, code: 'AAAAAA', startDate: '24-3-2024', endDate: '25-4-2024', amount: 200 },
        { id: 2, code: 'BBBBBB', startDate: '24-3-2024', endDate: '25-4-2024', amount: 200 },
        { id: 3, code: 'CCCCCC', startDate: '24-3-2024', endDate: '25-4-2024', amount: 200 },
        { id: 4, code: 'DDDDDD', startDate: '24-3-2024', endDate: '25-4-2024', amount: 200 },
        { id: 5, code: 'AEEEEE', startDate: '24-3-2024', endDate: '25-4-2024', amount: 200 },
        { id: 6, code: 'FFFFFF', startDate: '24-3-2024', endDate: '25-4-2024', amount: 200 }
        // Add more data as needed
    ];

    // Function to handle edit button click
    const handleEditClick = (promo) => {
        setSelectedPromo(promo);
    };

    return (
        <div>
            <p className="card-description">
                All promo code details
            </p>
            <table id='promocodeTable' className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Code</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.code}</td>
                            <td>{item.startDate}</td>
                            <td>{item.endDate}</td>
                            <td>{item.amount}</td>
                            <td>
                                <button className="btn btn-edit" onClick={() => handleEditClick(item)} data-bs-toggle="modal" data-bs-target="#PromocodeModal"><i className="bi bi-pencil-square"></i></button>
                                <button className="btn btn-delete"><i className="bi bi-trash"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedPromo && <PromocodeForm promoData={selectedPromo} />}
        </div>
    );
};

export default PromoCodeTable;
