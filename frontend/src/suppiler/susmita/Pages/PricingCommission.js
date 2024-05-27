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

<FeeCard />
<ShippingDetails />
<ReturnPolicy />
<CancellationPolicy />
<ReturnComponent />
<FeatureSection />
<PricingSloganCard />
<SupportComponent />
 {/* <Footer /> */}
    </div>
  )
}

export default PricingCommission;
