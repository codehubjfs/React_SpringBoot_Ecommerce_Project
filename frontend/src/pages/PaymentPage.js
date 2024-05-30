import React from 'react';
import PaymentStats from '../components/PaymentStats';
import PaymentHistoryTable from '../components/PaymentHistoryTable';
import DescriptionCard from "../components/DescriptionCard "


function PaymentPage() {
    
    const paymentData = [
        {
            customer: 'Hitesh Chauhan',
            product: 'SmartPhone',
            amount: '$18.76',
            modeOfPayment: 'Gpay',
            date: '2023-05-01',
            category: 'Electronics'
        },
        {
            customer: 'Samso Palto',
            product: 'T-shirt',
            amount: '$11.06',
            modeOfPayment: 'PhonePe',
            date: '2023-05-02',
            category: 'Clothing'
        },
        {
            customer: 'Tiplis Mang',
            product: 'Jean',
            amount: '$35.00',
            modeOfPayment: 'Gpay',
            date: '2023-05-03',
            category: 'Clothing'
        },
        {
            customer: 'Peter Parker',
            product: 'Laptop',
            amount: '$22.00',
            modeOfPayment: 'Credit card',
            date: '2023-05-04',
            category: 'Electronics'
        },
        {
            customer: 'Ankit Dave',
            product: 'Sneakers',
            amount: '$28.05',
            modeOfPayment: 'Gpay',
            date: '2023-05-05',
            category: 'Footwear'
        },
        {
            customer: 'Natasha Romanoff',
            product: 'Headphones',
            amount: '$50.99',
            modeOfPayment: 'PayPal',
            date: '2023-05-06',
            category: 'Electronics'
        },
        {
            customer: 'Steve Rogers',
            product: 'Watch',
            amount: '$75.50',
            modeOfPayment: 'Debit card',
            date: '2023-05-07',
            category: 'Accessories'
        },
        {
            customer: 'Tony Stark',
            product: 'Tablet',
            amount: '$120.00',
            modeOfPayment: 'Credit card',
            date: '2023-05-08',
            category: 'Electronics'
        },
        {
            customer: 'Bruce Banner',
            product: 'Book',
            amount: '$15.75',
            modeOfPayment: 'Gpay',
            date: '2023-05-09',
            category: 'Books'
        },
        {
            customer: 'Thor Odinson',
            product: 'Gym Equipment',
            amount: '$200.99',
            modeOfPayment: 'Credit card',
            date: '2023-05-10',
            category: 'Fitness'
        }
    ];
    
    

    return (
        <><br></br><br></br>
        <div>
            
                <h2 className='text-center' style={{paddingTop:"10px"}}>&nbsp;&nbsp;Payment</h2>
                <hr />
                <DescriptionCard title="Welcome to the Payment Management Page">
                    Monitor and manage all payment transactions, view their details, and track their statuses. 
                    This page helps you to keep an eye on pending, completed, and cancelled payments.
                </DescriptionCard>
                <PaymentHistoryTable />
            
            
        </div>
        </>
    );
}

export default PaymentPage;
