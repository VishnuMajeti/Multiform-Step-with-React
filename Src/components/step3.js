
// src/components/Step3.js
import React from 'react';

const Step3 = ({ formData, prevStep, handleSubmit }) => {
  return (
    <div>
      <h2>Confirm your details</h2>
      <div>
        <strong>Name:</strong> {formData.name}
      </div>
      <div>
        <strong>Email:</strong> {formData.email}
      </div>
      <div>
        <strong>Phone:</strong> {formData.phone}
      </div>
      <div>
        <strong>Address Line 1:</strong> {formData.address1}
      </div>
      <div>
        <strong>Address Line 2:</strong> {formData.address2}
      </div>
      <div>
        <strong>City:</strong> {formData.city}
      </div>
      <div>
        <strong>State:</strong> {formData.state}
      </div>
      <div>
        <strong>Zip Code:</strong> {formData.zip}
      </div>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step3;
