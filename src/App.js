import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import AppNavbar from './pages/navBarContainer'
import Home from './pages/Home/Home'
import Employees from './pages/Employees/Employees'
import IdEmployee from './pages/IdEmployee/IdEmployee'
import NotFound from './pages/NotFound/NotFound'
import Prize from '../src/components/Prize/Principal-prize'
import PrizeDetails from './pages/Prize/PrizeDetails'
import './App.css';

function App() {
  return (
    <HashRouter>
       <Route component={AppNavbar} />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/employees" component={Employees} />
      <Route exact path="/employees/:id" component={IdEmployee} />
      <Route exact path="/prizes" component={Prize} />
      <Route exact path="/prizes/:id" component={PrizeDetails} />
      <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
