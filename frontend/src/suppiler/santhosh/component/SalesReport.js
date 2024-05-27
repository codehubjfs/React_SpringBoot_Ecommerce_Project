import React from 'react';
import PieChart from './pieChart';
import '../title.css';

const SalesReport = ({ data }) => {
  return (
    <div style={{ marginTop: '60px' }}>
      <label style={{ marginBottom: '10px' }} id="sellernames"><strong>Products</strong></label>
      <div className="row">
        {data.product.map((item, index) => (
          <div className="col" key={index}>
            <div className="sellercard">
              <div className="sellercard-body">
                <h5 className="sellercard-title">{item.label}</h5>
                <p className="sellercard-text">{item.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <label style={{ marginBottom: '10px', marginTop:'15px'}} id="sellernames"><strong>Listing</strong></label>
      <div className="row">
        {data.listing.map((item, index) => (
          <div className="col" key={index}>
            <div className="sellercard">
              <div className="sellercard-body">
                <h5 className="sellercard-title">{item.label}</h5>
                <p className="sellercard-text">{item.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
     
      <div className="mt-5" style={{ marginTop: '0px' }}>
        <hr style={{ borderTop: '2px solid black', marginTop: '30px' }} />
        <label style={{ fontSize: '30px', marginTop: '0%', marginBottom : '30px ', textAlign:'center'}} id='sales'><strong>Sales Report</strong></label>
        <div className="row">
          <div className="col-md-6">
            <PieChart /> {/* Assuming PieChart is a valid component */}
          </div>
          <div className="col-md-6" style={{ marginTop: '2%', marginLeft: '0px'}}>
            <div className="row">
              {data.sales.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="sellercard">
                    <div className="sellercard-body">
                      <h5 className="sellercard-title">{item.label}</h5>
                      <p className="sellercard-text">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;