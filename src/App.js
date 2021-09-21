import './App.css';
import react from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Calculator from './components/calculator';

class App extends react.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/calculator">
            <Calculator />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
