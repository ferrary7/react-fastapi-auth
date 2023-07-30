import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistrationSuccess = () => {
    setIsRegistered(true);
  };

  return (
    <div className="App">
      {isRegistered ? (
        <Login />
      ) : (
        <Register onRegistrationSuccess={handleRegistrationSuccess} />
      )}
    </div>
  );
}

export default App;
