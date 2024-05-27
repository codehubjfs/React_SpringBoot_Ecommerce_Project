import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Electroniccards, Homeproductcard, Beautyproductcard, Clothingproductcard } from "../components/Productdatas";
import ReviewOrder from '../components/ReviewOrder';
import SelectAddress from '../components/SelectAddress';
import CompletePayment from '../components/CompletePayment';
import ProgressBar from '../components/ProgressBar';


const ProductCheckoutPage = () => {
  const { categoryId, productId } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");

  let products;
  switch (categoryId) {
    case '1':
      products = Electroniccards;
      break;
    case '2':
      products = Homeproductcard;
      break;
    case '3':
      products = Beautyproductcard;
      break;
    case '4':
      products = Clothingproductcard;
      break;
    default:
      products = [];
  }

  const product = products.find(product => product.productId === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  const nextStep = () => setCurrentStep(prevStep => prevStep + 1);
  const prevStep = () => setCurrentStep(prevStep => prevStep - 1);

  const handleAddressSelection = (address) => setSelectedAddress(address);
  const handlePaymentMethodChange = (event) => setSelectedPaymentMethod(event.target.value);

  return (
    <div className="container mt-5">
      <ProgressBar currentStep={currentStep} />
      {currentStep === 1 && (
        <ReviewOrder product={product} nextStep={nextStep} />
      )}
      {currentStep === 2 && (
        <SelectAddress
          selectedAddress={selectedAddress}
          handleAddressSelection={handleAddressSelection}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {currentStep === 3 && (
        <CompletePayment
          product={product}
          selectedAddress={selectedAddress}
          selectedPaymentMethod={selectedPaymentMethod}
          handlePaymentMethodChange={handlePaymentMethodChange}
          prevStep={prevStep}
        />
      )}
    </div>
  );
};

export default ProductCheckoutPage;