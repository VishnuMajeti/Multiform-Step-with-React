// src/App.js
import React, { useState, useEffect } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Navigation from './components/Navigation';
import './styles.css';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : {};
  });

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  const prevStep = () => setCurrentStep((prevStep) => prevStep - 1);
  const navigateToStep = (step) => setCurrentStep(step);

  const handleSubmit = () => {
    alert('Form submitted successfully!');
    localStorage.removeItem('formData');
    setFormData({});
    setCurrentStep(1);
  };

  return (
    <div className="App">
      <Navigation currentStep={currentStep} navigateToStep={navigateToStep} />
      {currentStep === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
            {currentStep === 2 && <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
      {currentStep === 3 && <Step3 formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} />}
    </div>
  );
};

export default App;


