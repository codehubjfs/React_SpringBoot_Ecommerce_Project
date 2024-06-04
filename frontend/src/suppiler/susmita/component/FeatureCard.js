import React from 'react';
import '../App.css';
import '../card.css';

function FeatureCard({ icon, title, description }) {
  return (
    <div className="col-md-3">
      <div className="ui-card">
        <div className="ui-card-body ui-text-center" style={{margin:'0px'}}>
          {/* Center the icon vertically */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
            <img src={icon} className="card-img-top feature-icon" alt={title} style={{ width: '32px', height: '32px' }} />
          </div >
          <h5 className="ui-card-title" style={{ color: 'black', fontSize: '20px' }}>{title}</h5>
          <p className="ui-card-text feature-description" style={{ color: 'black', fontSize: '16px',  padding: '10px', textAlign: 'justify' }}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
