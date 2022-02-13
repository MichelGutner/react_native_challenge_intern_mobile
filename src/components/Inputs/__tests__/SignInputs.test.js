import React from 'react';
import renderer from 'react-test-renderer';
import SignInputs from '../SignInputs';

test('renders correctly', () => {
  const tree = renderer.create(<SignInputs />).toJSON();
  expect(tree).toMatchSnapshot();
});
