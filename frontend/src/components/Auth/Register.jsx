import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Auth.css"; // Import the CSS file for styling
import { API_BASE_URL } from "../../main"; // Import the API base URL

const Register = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
              // Use the API endpoint
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });

            if (response.ok) {
              // Handle successful registration
              console.log("Registration successful");
              navigate("/login"); // Redirect to the login page
            } else {
              // Handle registration error
              console.error("Registration failed");
            }
          } catch (error) {
            console.error("Error during registration:", error, values);
          }
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
};

export default Register;
