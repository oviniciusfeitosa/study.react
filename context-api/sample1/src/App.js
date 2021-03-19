import React from "react";
import { AuthContext } from "./providers/auth";

const App = () => {

  const { user } = React.useContext(AuthContext);
  
  return (
    <div className="App">
      <h1>Yo! {user.name}</h1>
    </div>
  );
}

export default App;
