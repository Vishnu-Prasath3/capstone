import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Auth.css"; // Import the CSS file for styling

const Register = () => (
  <div className="auth-container">
    <h2>Register</h2>
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values) => {
        // Handle registration logic
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <div>
            <label>Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Register;
