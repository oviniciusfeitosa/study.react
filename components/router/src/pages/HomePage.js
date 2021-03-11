import logo from "../logo.svg";

import { Link } from "react-router-dom";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/About">{'Check out our About Page!'}</Link>
      </header>
      <h1>This is Home Page</h1>
    </Fragment>
  );
}

export default HomePage;
