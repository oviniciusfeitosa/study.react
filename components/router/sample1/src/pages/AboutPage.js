import logo from "../logo.svg";

import { Fragment } from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/">{"Check out our Home Page!"}</Link>
      </header>
      <h1>This is About Page</h1>
    </Fragment>
  );
}

export default AboutPage;
