// src/components/Navigation.js
import React from 'react';

const Navigation = ({ currentStep, navigateToStep }) => {
  return (
    <div>
      <button disabled={currentStep === 1} onClick={() => navigateToStep(1)}>Step 1</button>
      <button disabled={currentStep === 2} onClick={() => navigateToStep(2)}>Step 2</button>
      <button disabled={currentStep === 3} onClick={() => navigateToStep(3)}>Step 3</button>
    </div>
  );
};

export default Navigation;

