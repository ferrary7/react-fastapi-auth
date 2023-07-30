import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

const Form = ({ action, onAuthSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const apiUrl = "http://localhost:8000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (action === "register") {
        const requestData = { username: username, password: password };
        const response = await axios.post(`${apiUrl}/auth/`, requestData);
        console.log(response.data);
        alert("User registered successfully!");
        onAuthSuccess(username);
      } else if (action === "token") {
        const formData = `grant_type=password&username=${encodeURIComponent(
          username
        )}&password=${encodeURIComponent(password)}`;
        const response = await axios.post(`${apiUrl}/auth/token`, formData, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        console.log(response.data);
        onAuthSuccess(username);
      }
    } catch (error) {
      console.error(error);
      alert(
        `Error occurred while ${
          action === "token" ? "logging in" : "registering user"
        }.`
      );
    }
  };

  return (
    <div className="OverContainer">
      <div className="Form">
        <h1>React FastAPI Auth {action === "token" ? "Login" : "Register"}</h1>

        <div>
          <h2>User {action === "token" ? "Login" : "Registration"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="submit-btn">
              {action === "token" ? "Login" : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
