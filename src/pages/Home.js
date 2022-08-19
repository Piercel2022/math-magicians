/* eslint-disable max-len */
import React from 'react';
import { Route } from 'react-router-dom';

const Home = () => (
  <Route path="/">
    <div className="container">
      <h1>Welcome to our page!</h1>
      <p className="home-para">
        Math magicians is a website for all fans of mathematics. It is a Single
        Page App (SPA) that allows users to: Make simple calculations. Read a
        random math-related quote.This is a single page application. In fact, let me tell
        you about React first. React is technically a javascript library that has a
        purpose of building user interface. In this project, the user interface is a
        calculator, that make some mathematics calculations. You can see in the menu
        the calculator bar. Go there and enter some calculations.
      </p>
      <p className="home-para">
        There are certain calculations I should like to make with you,
        To be sure that your deductions will be logical and true;
        And remember, &apos;Patience, Patience,&apos; is the watchword of a sage,
        Not to-day nor yet to-morrow can complete a perfect age.
      </p>
    </div>
  </Route>
);
export default Home;
