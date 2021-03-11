import logo from "../logo.svg";

import { Fragment } from "react";

function AboutPage() {
  return (
    <Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          HomePage
        </a>
      </header>
    </Fragment>
  );
}

export default AboutPage;
