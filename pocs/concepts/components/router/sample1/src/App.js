import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage}/>
      <Route path="/About" component={AboutPage}/>
    </BrowserRouter>
  );
}

export default App;
