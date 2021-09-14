import react from 'react';

export default class Calculator extends react.Component {
  render() {
    const numbers = ['.', 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => <button type="button" key={number}>{number}</button>);
    const verticalSymbols = ['/', 'x', '-', '+', '='].map((symbol) => <button type="button" key={symbol}>{symbol}</button>);
    const horizontalSymbols = ['%', '+/-', 'AC'].map((symbol) => <button type="button" key={symbol}>{symbol}</button>);
    return (
      <div>
        <p className="screen">0</p>
        <div className="buttons">
          <div className="vertical">{verticalSymbols}</div>
          <div className="horizontal">{horizontalSymbols}</div>
          <div className="numbers">{numbers}</div>
        </div>
      </div>
    );
  }
}
