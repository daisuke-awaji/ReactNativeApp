// __tests__/Intro-test.js
import React from 'react';
import App from '../App.js'

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<App />);
  expect(tree.toJSON()).toMatchSnapshot();
});
