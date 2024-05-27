import React from 'react';
import SupportContent from './SupportContent';
import ContactContent from './ContactContent';
function SupportComponent() {
  return (
    <div className="ui-container mb-5">
      <div className="row">
        <SupportContent />
        <ContactContent />
      </div>
    </div>
  );
}

export default SupportComponent;