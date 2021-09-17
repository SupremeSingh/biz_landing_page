import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home.js';
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Registration from "./pages/registration";

const Main = () => {
  return (
    <Switch> 
      {/* <Route exact path='/' component={Home}></Route> */}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/registration' component={Registration}></Route>
    </Switch>
  );
}

export default Main;