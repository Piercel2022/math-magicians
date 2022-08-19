/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/calculator';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
      </Switch>
    </>
  );
}

export default App;
