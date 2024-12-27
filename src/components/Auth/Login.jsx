import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Auth.css"; // Import the CSS file for styling

const Login = () => (
  <div className="auth-container">
    <h2>Login</h2>
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        // Handle login logic
        console.log(values);
      }}
    >
      {() => (
        <Form>
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
          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Login;
