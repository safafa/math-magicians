import react from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event) {
    this.setState(
      calculate(this.state, event.target.name),
    );
  }

  render() {
    const numbers = ['AC', '+/-', '%', 9, 8, 7, 6, 5, 4, 3, 2, 1].map((number) => <button type="button" key={number} className="innerButton" id={number} name={number} onClick={this.handleEvent}>{number}</button>);
    const verticalSymbols = ['÷', 'x', '-', '+', '='].map((symbol) => <button type="button" key={symbol} className="cornerButton" name={symbol} onClick={this.handleEvent}>{symbol}</button>);
    return (
      <div className="calculator">
        <p className="screen">
          <span>{this.state.total}</span>
          <span>{this.state.operation}</span>
          <span>{this.state.next}</span>
        </p>
        <div className="buttons">
          <div className="vertical">{verticalSymbols}</div>
          <div className="inner-container">
            {numbers}
            <button type="button" key="zero" className="innerButton" id="zero" name={0} onClick={this.handleEvent}>0</button>
            <button type="button" key="dot" className="innerButton" id="dot" name="." onClick={this.handleEvent}>.</button>
          </div>
        </div>
      </div>
    );
  }
}
