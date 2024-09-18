// /src/components/Routes.js
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import About from '../pages/About'
import Another from '../pages/Another'
import Contact from '../pages/Contact'
import Home from '../pages/Home'


const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/another" component={Another} />
    </BrowserRouter>
);

export default Routes