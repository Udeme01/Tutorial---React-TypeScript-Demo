import React, { useState } from "react";

const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedOut] = useState(false);

    const handleLogin = () => {
        setIsLoggedOut(true)
    }
    const handleLogout = () => {
        setIsLoggedOut(false)
    }

  return (
    <div>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <div>User is {isLoggedIn ? 'LoggedIn' : 'LoggedOut'}</div>
    </div>
  );
};

export default LoggedIn;

// Typing 'useState Hook' as props in a component...