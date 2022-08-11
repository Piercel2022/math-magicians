import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [state, setState] = useState({});

  const handleClick = (e) => {
    setState(calculate(state, e.target.textContent));
  };
  const { next, total } = state;
  return (
    <main className="cal-main">
      <div><h2 className="cal-heading">CALCULATOR</h2></div>
      <div className="output"><p data-testid="total" className="output-p">{next || total || 0}</p></div>
      <div className="flex-buttons">
        <button className="button" type="button" onClick={handleClick}>AC</button>
        <button className="button" type="button" onClick={handleClick}>+/-</button>
        <button className="button" type="button" onClick={handleClick}>%</button>
        <button className="button last-column" type="button" onClick={handleClick}>÷</button>
      </div>
      <div className="flex-buttons">
        <button className="button" type="button" onClick={handleClick}>7</button>
        <button className="button" type="button" onClick={handleClick}>8</button>
        <button className="button" type="button" onClick={handleClick}>9</button>
        <button className="button last-column" type="button" onClick={handleClick}>x</button>
      </div>
      <div className="flex-buttons">
        <button className="button" type="button" onClick={handleClick}>4</button>
        <button className="button" type="button" onClick={handleClick}>5</button>
        <button className="button" type="button" onClick={handleClick}>6</button>
        <button className="button last-column" type="button" onClick={handleClick}>-</button>
      </div>
      <div className="flex-buttons">
        <button className="button" type="button" onClick={handleClick}>1</button>
        <button className="button" type="button" onClick={handleClick}>2</button>
        <button className="button" type="button" onClick={handleClick}>3</button>
        <button className="button last-column" type="button" onClick={handleClick}>+</button>
      </div>
      <div className="flex-buttons">
        <button className="button zero" type="button" onClick={handleClick}>0</button>
        <button className="button" type="button" onClick={handleClick}>.</button>
        <button className="button last-column" type="button" onClick={handleClick}>=</button>
      </div>
    </main>
  );
};
export default Calculator;
