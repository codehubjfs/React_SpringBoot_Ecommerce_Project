import React from 'react';
import PaymentStats from '../components/PaymentStats';
import PaymentHistoryTable from '../components/PaymentHistoryTable';
import DescriptionCard from "../components/DescriptionCard "


function PaymentPage() {
    

    
    

    return (
        <><br></br><br></br>
        <div>
            
                <h2 className='text-center' style={{paddingTop:"10px"}}>&nbsp;&nbsp;Payment</h2>
                <hr />
                <DescriptionCard title="Welcome to the Payment Management Page">
                    Monitor and manage all payment transactions, view their details, and track their statuses. 
                    This page helps you to keep an eye on pending, completed, and cancelled payments.
                </DescriptionCard>
                <PaymentHistoryTable/>
            
            
        </div>
        </>
    );
}

export default PaymentPage;
