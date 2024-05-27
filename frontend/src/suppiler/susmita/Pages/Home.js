// Home.js
import React from 'react';

import PhoneNumberInput from '../component/PhoneNumberInput';
import ParentComponent from '../component/ParentComponent';
import BenefitPromotion from '../component/BenefitPromotion';
import BenefitStep from '../component/BenefitStep';

import CategoriesComponent from '../component/CategoriesComponent';
import SupportComponent from '../component/SupportComponent';
import CombineComponent from '../component/CombineComponent';

import AnotherComponent from '../component/AnotherComponent';
import '../App.css';

function Home() {
  return (
    <div>
  <AnotherComponent />

      <PhoneNumberInput />
     
     
      <ParentComponent />
      <BenefitPromotion />
      <CombineComponent />
 <BenefitStep />
 <CategoriesComponent />

 <SupportComponent />


   

     
    </div>
  );
}

export default Home;
