// Register.js
import React from "react";
import Form from "./Form";

const Register = ({ onRegistrationSuccess }) => {
  const handleRegistrationSuccess = () => {
    alert("User registered successfully!");
    onRegistrationSuccess();
  };

  return <Form action="register" onAuthSuccess={handleRegistrationSuccess} />;
};

export default Register;
