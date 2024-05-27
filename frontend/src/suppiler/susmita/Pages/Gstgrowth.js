import React from 'react';

import GSTContent from '../component/GSTContent';
import '../App.css';
// import Footer from '../Layout/Footer';
import OpportunitySeller from '../component/OpportunitySeller';
import Features from '../component/Features';
import BenefitModule from '../component/BenefitModule';
import FAQSection from '../component/FAQSection';
function Gstgrowth(){
    return(
    <div>
   <GSTContent />
   <OpportunitySeller />
   <Features />
   <BenefitModule />
   <FAQSection />
   {/* <Footer/> */}
    </div>
    );
}
export default Gstgrowth;