import React from 'react';
import '../App.css';
import MainContent from './MainContent';
import gst from '../assets/images/gst1.jpeg';
import PhoneNumberInput from './PhoneNumberInput';

function GSTContent() {
  return (
    <div>
      <MainContent
        title="No GSTIN? No Worries!"
        subtitle="Composition GSTIN? No Worries!"
        description="Whether you're a big business or a small one, now sell to millions in your state, without a Regular GSTIN. Register Now and Start Selling."
        imageUrl={gst}
      />
      <PhoneNumberInput />
    </div>
  );
}

export default GSTContent;
