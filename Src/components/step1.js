// src/components/Step1.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Step1 = ({ formData, setFormData, nextStep }) => {
  const formik = useFormik({
    initialValues: {
      name: formData.name || '',
      email: formData.email || '',
      phone: formData.phone || '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
    }),
    onSubmit: (values) => {
      setFormData({ ...formData, ...values });
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          {...formik.getFieldProps('phone')}
        />
        {formik.touched.phone && formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step1;

