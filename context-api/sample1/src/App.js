import React from "react";
import Profile from "./components/profile";
import { useAuth } from "./providers/auth";

const App = () => {

  const { user, setUser } = useAuth();
  
  console.log(user)

  return (
    <div className="App">
      <label>Name:</label> <input type="text" onChange={(e) => setUser({name: e.target.value})} />
      <hr />
      <Profile />
    </div>
  );
}

export default App;
