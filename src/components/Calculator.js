import React, {Component} from 'react';

import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <div className="output"><p className="output-field">0</p></div>
        <div className="flex-buttons">
          <button className="button" type="button">AC</button>
          <button className="button" type="button">+/-</button>
          <button className="button" type="button">%</button>
          <button className="button last-column" type="button">÷</button>
        </div>
        <div className="flex-buttons">
          <button className="button" type="button">7</button>
          <button className="button" type="button">8</button>
          <button className="button" type="button">9</button>
          <button className="button last-column" type="button">x</button>
        </div>
        <div className="flex-buttons">
          <button className="button" type="button">4</button>
          <button className="button" type="button">5</button>
          <button className="button" type="button">6</button>
          <button className="button last-column" type="button">-</button>
        </div>
        <div className="flex-buttons">
          <button className="button" type="button">1</button>
          <button className="button" type="button">2</button>
          <button className="button" type="button">3</button>
          <button className="button last-column" type="button">+</button>
        </div>
        <div className="flex-buttons">
          <button className="button zero" type="button">0</button>
          <button className="button" type="button">.</button>
          <button className="button last-column" type="button">=</button>
        </div>
      </main>
    );
  }
}

export default Calculator;