import React, { useState } from 'react';
import Calculate from '../logic/calculate';

export default function Calculator() {
  const stateObj = {
    total: '0',
    next: null,
    operation: null,
  };

  const [obj, setObj] = useState(() => ({ ...stateObj }));

  const handleClick = (event) => {
    const newObj = { ...obj, ...Calculate(obj, event.target.name) };
    setObj(() => ({ ...newObj }));
  };

  const numbers = ['AC', '+/-', '%', 9, 8, 7, 6, 5, 4, 3, 2, 1].map((number) => <button type="button" key={number} className="innerButton" id={number} name={number} onClick={handleClick}>{number}</button>);
  const verticalSymbols = ['÷', 'x', '-', '+', '='].map((symbol) => <button type="button" key={symbol} className="cornerButton" name={symbol} onClick={handleClick}>{symbol}</button>);
  return (
    <div className="calculator">
      <p className="screen">
        <span>{obj.total}</span>
        <span>{obj.operation}</span>
        <span>{obj.next}</span>
      </p>
      <div className="buttons">
        <div className="vertical">{verticalSymbols}</div>
        <div className="inner-container">
          {numbers}
          <button type="button" key="zero" className="innerButton" id="zero" name={0} onClick={handleClick}>0</button>
          <button type="button" key="dot" className="innerButton" id="dot" name="." onClick={handleClick}>.</button>
        </div>
      </div>
    </div>
  );
}
