import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import { AddEmployee } from './components/Addemployee';
import { EditEmployee } from './components/Editemployee';

import { GlobalProvider } from './context/GlobalState';

function App() {
  eturn (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddEmployee} exact />
        <Route path="/edit/:id" component={EditEmployee} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
