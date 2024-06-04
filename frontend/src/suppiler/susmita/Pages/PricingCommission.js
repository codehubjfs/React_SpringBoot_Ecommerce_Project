// PricingCommission.js
import React from 'react';

import PricingComponent from '../component/PricingComponent';
import FeeCard from '../component/FeeCard';
import '../App.css';

import SupportComponent from '../component/SupportComponent';

import ShippingDetails from '../component/ShippingDetails';
import ReturnPolicy from '../component/ReturnPolicy';
import CancellationPolicy from '../component/CancellationPolicy';
import ReturnComponent from '../component/ReturnComponent';
import FeatureSection from '../component/FeatureSection';
import PricingSloganCard from '../component/PricingSloganCard';


function PricingCommission() {
  return (
    <div>
  <PricingComponent />
  <PricingSloganCard />


<FeeCard />
<ShippingDetails /><br/>
<ReturnPolicy /><br/>
<CancellationPolicy /><br/>
<ReturnComponent />
<FeatureSection />
<SupportComponent />
 {/* <Footer /> */}
    </div>
  )
}

export default PricingCommission;
