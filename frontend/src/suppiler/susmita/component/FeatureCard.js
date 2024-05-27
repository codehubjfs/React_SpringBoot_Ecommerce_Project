import React from 'react';
import '../App.css';
import '../card.css';
function FeatureCard({ icon, title, description }) {
  return (
    <div className="col-md-3">
      <div className="ui-card">
        <div>
          <img src={icon} className="card-img-top feature-icon" alt={title} style={{ width: '32px', height: '32px' }} />
        </div>
        <div className="ui-card-body  ui-text-center">
          <h5 className="ui-card-title" style={{ color: 'black', fontSize: '18px' }}>{title}</h5>
          <p className="ui-card-text feature-description" style={{ color: 'black', fontSize: '18px',marginLeft:'2px' }}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
