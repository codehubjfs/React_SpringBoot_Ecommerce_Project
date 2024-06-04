// HomeSupplier.js
import React from 'react';
import AnotherComponent from '../component/AnotherComponent';
import PhoneNumberInput from '../component/PhoneNumberInput';
import ImageComponent from '../component/ImageComponent';
import BenefitPromotion from '../component/BenefitPromotion';
import BenefitStep from '../component/BenefitStep';
import CategoriesComponent from '../component/CategoriesComponent';
import SupportComponent from '../component/SupportComponent';
import CombineComponent from '../component/CombineComponent';
import OfferCarousel from '../component/OfferCarousel';
import '../App.css';

function HomeSupplier() {
  return (
    <div>
      <ImageComponent />
      <PhoneNumberInput />

      {/* <OfferCarousel offers={offers} /> */}
      <AnotherComponent />
      <BenefitPromotion />
      <CombineComponent />
      <BenefitStep />
      <CategoriesComponent />
      <SupportComponent />
    </div>
  );
}

export default HomeSupplier;
