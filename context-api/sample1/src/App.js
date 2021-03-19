import React from "react";
import Profile from "./components/profile";
import { AuthContext } from "./providers/auth";

const App = () => {

  const { user, setUser } = React.useContext(AuthContext);
  
  console.log(user)

  return (
    <div className="App">
      <label>Nome:</label> <input type="text" onChange={(e) => setUser({name: e.target.value})} />
      <hr />
      <Profile />
    </div>
  );
}

export default App;
