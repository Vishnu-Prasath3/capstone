import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Auth.css"; // Import the CSS file for styling
import { API_BASE_URL } from "../../main"; // Import the API base URL

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
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
              navigate("/role-selection"); // Redirect to Role Selection
              setErrorMessage(""); // Clear any previous error messages
            } else {
              // Handle login error
              setErrorMessage("User does not exist."); // Set error message
              console.error("Login failed");
            }
          } catch (error) {
            setErrorMessage("An error occurred during login."); // Set error message for network errors
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
};

export default Login;
