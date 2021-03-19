import React from "react";
import { AuthContext } from "./providers/auth";

const App = () => {

  const { user, setUser } = React.useContext(AuthContext);
  
  console.log(user)

  return (
    <div className="App">
      <h1>Yo! {user.name}</h1>
      <input type="text" onChange={(e) => setUser({name: e.target.value})} />
    </div>
  );
}

export default App;
