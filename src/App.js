import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/Home/Home'
import Employees from './pages/Employees/Employees'
import Employee from './pages/Employee/Employee'
import NotFound from './pages/NotFound/NotFound'
import './App.css';

function App() {
  return (
    <BrowserRouter>


      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/employees" component={Employees} />
      <Route exact path="/employees/:id" component={Employee} />
      <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
