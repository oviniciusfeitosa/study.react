import React, { Fragment, useState } from "react";
import { useAuth } from "../providers/auth";

const Login = () => {
  const [input, setInput] = useState({
    name: ''
  });
  const { setUser } = useAuth();

  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify(input));
    setUser(input);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({
      name: ''
    });
  };

  return (
    <Fragment>
      <hr />
      <div>
        <label>Name:</label> <input type="text" onChange={(e) => setInput({name: e.target.value})} />
        <br />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </Fragment>
  );
};

export default Login;
