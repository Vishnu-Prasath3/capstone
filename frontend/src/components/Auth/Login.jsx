import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Auth.css"; // Import the CSS file for styling
import { API_BASE_URL } from "../../main"; // Import the API base URL

const Login = () => (
  <div className="auth-container">
    <h2>Login</h2>
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        try {
          const response = await fetch(`${API_BASE_URL}/login`, {
            // Use the API endpoint
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
          if (response.ok) {
            // Handle successful login
            console.log("Login successful");
          } else {
            // Handle login error
            console.error("Login failed");
          }
        } catch (error) {
          console.error("Error during login:", error);
        }
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
