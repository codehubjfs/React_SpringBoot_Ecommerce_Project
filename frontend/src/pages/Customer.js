import React from 'react';

import CustomerDetails from '../components/CustomerDetails';

function Customer() {
    
    const users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            address: '123, Main street',
            state: 'Karnataka',
            pincode: '636015',
            mobile: '9876123456',
            membership: 'Premium'
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            address: '456, Elm street',
            state: 'California',
            pincode: '90210',
            mobile: '1234567890',
            membership: 'Basic'
        },
        {
            id: 3,
            name: 'Alice Johnson',
            email: 'alice@example.com',
            address: '789, Oak Avenue',
            state: 'New York',
            pincode: '10001',
            mobile: '5551234567',
            membership: 'Basic'
        },
        {
            id: 4,
            name: 'Bob Wilson',
            email: 'bob@example.com',
            address: '1011, Pine Street',
            state: 'Texas',
            pincode: '77002',
            mobile: '5559876543',
            membership: 'Premium'
        },
        {
            id: 5,
            name: 'Emily Brown',
            email: 'emily@example.com',
            address: '1315, Maple Lane',
            state: 'Florida',
            pincode: '33101',
            mobile: '5557890123',
            membership: 'Basic'
        },
    ];
    return (
        <>
   <br></br>
        <div >
        
            <CustomerDetails users={users} />
           
        </div>
        </>
    );
}

export default Customer;
