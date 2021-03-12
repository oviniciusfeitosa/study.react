import './App.css';
import { ValidationSchemaExample } from './components/ValidationSchemaExample';
import { ValidationSchemaLoginExample } from './components/ValidationSchemaLoginExample';

import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ValidationSchemaExample></ValidationSchemaExample>
        <hr />
        <ValidationSchemaLoginExample></ValidationSchemaLoginExample>
      </header>

    </div>
  );
}

export default App;
