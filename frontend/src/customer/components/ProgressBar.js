import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="progress" style={{ height: "20px", marginBottom: "20px" }}>
      <progress
        className="progress-bar"
        value={(currentStep / 3) * 100}
        max="100"
        style={{ width: ` ${(currentStep / 3) * 100}% ` }}
      >
        Step {currentStep} of 3
      </progress>
    </div>
  );
};

export default ProgressBar;
