import React, { useState } from "react";
import Form from "./Form";

const Login = () => {
  const [accessToken, setAccessToken] = useState("");
  const [welcomeUsername, setWelcomeUsername] = useState("");

  const handleLoginSuccess = (username) => {
    setAccessToken("dummy-access-token");
    setWelcomeUsername(username);
  };

  const handleViewUser = () => {
    if (!accessToken) {
      alert("Please log in to access the user details.");
    } else {
      alert(`Welcome, ${welcomeUsername}!`);
    }
  };

  const handleLogout = () => {
    setAccessToken("");
    setWelcomeUsername("");
  };

  return (
    <div className="Login">
      <Form action="token" onAuthSuccess={handleLoginSuccess} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <button onClick={handleViewUser}>View User</button>
        </div>
        {accessToken ? (
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
