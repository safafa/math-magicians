import react from 'react';

export default class Calculator extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const numbers = ['AC', '+/-', '%', 9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((number) => <button type="button" key={number} className="innerButton">{number}</button>);
    const verticalSymbols = ['/', 'x', '-', '+', '='].map((symbol) => <button type="button" key={symbol} className="cornerButton">{symbol}</button>);
    return (
      <div className="calculator">
        <p className="screen">{this.state.result}</p>
        <div className="buttons">
          <div className="vertical">{verticalSymbols}</div>
          <div className="inner-container">
            {numbers}
            <button type="button" key="dot" className="innerButton" id="dot">.</button>
          </div>
        </div>
      </div>
    );
  }
}
