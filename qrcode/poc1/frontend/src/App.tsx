import React from 'react';
import logo from './logo.svg';
import './App.css';
import QRCodeComponent from './components/QRCodeComponent';
import QRCodeReader from './components/QRCodeReader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" height={100} width={100} /> */}
        <QRCodeComponent />
        <hr style={{width: '90%'}} />
        <QRCodeReader />
      </header>
    </div>
  );
}

export default App;
