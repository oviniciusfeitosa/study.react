import "./App.css";
import OTPComponent from "./OPTComponent";

function App() {

  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <li>OTP - Google Authenticator</li>
        </ul>
      </div>
      <div className="card">
        <OTPComponent />
      </div>
    </div>
  );
}

export default App;
