import React from 'react';
import renderer from 'react-test-renderer';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import Calculator from '../components/calculator';

describe('Component test snapshot', () => {
  it('Router renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <NavLink to="/">Home</NavLink>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Calculator renders correctly', () => {
    const tree = renderer
      .create(
        <Calculator />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
