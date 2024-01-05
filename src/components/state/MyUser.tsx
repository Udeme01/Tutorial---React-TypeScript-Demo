import React, { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

const MyUser = () => {
    const [user, setUser] = useState<AuthUser | null>(null);

    const handleLogin = () => {
        setUser({
            name: 'Udeme Emmanuel',
            email: 'emmanueluddy2@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

  return (
    <div>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <div>User's name is {user?.name}</div>
      <div>User's email is {user?.email}</div>
    </div>
  );
};

export default MyUser;

// HOW TO TYPE THE USE STATE HOOK WHEN THE INITIAL VALUE TYPE IS DIFFERENT TO THE FUTURE VALUE TYPE.

// Typing 'useState Hook' whose value can be a different type compared to the initial value - I specified that the state type can be "null" or "AuthUser"

// The initial value specified in the useState() is "null", future value is the "AuthUser".