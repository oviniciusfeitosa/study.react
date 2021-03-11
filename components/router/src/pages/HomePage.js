import logo from "../logo.svg";


function HomePage() {
  return (
    <div className="HomePage">
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
    </div>
  );
}

export default HomePage;
