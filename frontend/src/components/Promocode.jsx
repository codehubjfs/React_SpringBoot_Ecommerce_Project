import React from 'react';
import PromocodeForm from './PromocodeForm';
import PromoCodeTable from './PromocodeTable';
import DescriptionCard from '../components/DescriptionCard ';
const PromoCodeManagement = () => {
    return (
            <>
                <h1 className="text-center">Promo Code</h1>
           <hr />
            <div className="table-responsive">
                <PromocodeForm/>
                <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
                    <div id="toast-addPromocode" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body" style={{ color: 'rgba(40, 182, 40, 0.587)' }}>
                            Promo Code Added Successfully
                        </div>
                    </div>
                </div>
                <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
                    <div id="toast-delet" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body" style={{ color: 'rgba(215, 46, 46, 0.97)' }}>
                            Data deleted Successfully
                        </div>
                    </div>
                </div>

                
                {/* table */}
                <div className="mt-4">
                <DescriptionCard title="Welcome to the Customer Management Page">
                Welcome to the Admin Promo Code Page! Here, you can create, manage, and track promotional codes for your e-commerce website. Customize discounts, set expiration dates, and monitor usage. Drive sales and reward customers with targeted offers and boost your business today!
                </DescriptionCard>
                < div id="Product-table">
                        <div className="row container d-flex justify-content-center">
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#PromocodeModal" data-bs-whatever="@mdo" id="addbtn">Add promocode</button>
                            </div>
                                        
                                <div className="table-responsive">
                                    <PromoCodeTable/>
                                </div>
                            </div>
                        </div>
                </div>                
            </div>
            </>
    );
}

export default PromoCodeManagement;