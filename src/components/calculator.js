import react from 'react';

export default class Calculator extends react.Component {
  render() {
    const numbers = ['AC', '+/-', '%', 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.'].map((number) => <button type="button" key={number} className="innerButton">{number}</button>);
    const verticalSymbols = ['/', 'x', '-', '+', '='].map((symbol) => <button type="button" key={symbol} className="cornerButton">{symbol}</button>);
    return (
      <div className="calculator">
        <p className="screen">0</p>
        <div className="buttons">
          <div className="vertical">{verticalSymbols}</div>
          <div className="inner-container">{numbers}</div>
        </div>
      </div>
    );
  }
}
