import React from 'react';
import renderer from 'react-test-renderer';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <NavLink to="/">Home</NavLink>
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
