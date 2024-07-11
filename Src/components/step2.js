// src/components/Step2.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const formik = useFormik({
    initialValues: {
      address1: formData.address1 || '',
      address2: formData.address2 || '',
      city: formData.city || '',
      state: formData.state || '',
      zip: formData.zip || '',
    },
    validationSchema: Yup.object({
      address1: Yup.string().required('Address Line 1 is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      zip: Yup.string().required('Zip Code is required'),
    }),
    onSubmit: (values) => {
      setFormData({ ...formData, ...values });
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Address Line 1</label>
        <input
          type="text"
          name="address1"
          {...formik.getFieldProps('address1')}
        />
        {formik.touched.address1 && formik.errors.address1 ? <div>{formik.errors.address1}</div> : null}
      </div>
      <div>
        <label>Address Line 2</label>
        <input
          type="text"
          name="address2"
          {...formik.getFieldProps('address2')}
        />
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          name="city"
          {...formik.getFieldProps('city')}
        />
        {formik.touched.city && formik.errors.city ? <div>{formik.errors.city}</div> : null}
      </div>
      <div>
        <label>State</label>
        <input
          type="text"
          name="state"
          {...formik.getFieldProps('state')}
        />
        {formik.touched.state && formik.errors.state ? <div>{formik.errors.state}</div> : null}
      </div>
      <div>
        <label>Zip Code</label>
        <input
          type="text"
          name="zip"
          {...formik.getFieldProps('zip')}
        />
        {formik.touched.zip && formik.errors.zip ? <div>{formik.errors.zip}</div> : null}
      </div>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step2;

