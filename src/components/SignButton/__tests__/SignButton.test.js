import React from 'react';
import renderer from 'react-test-renderer';
import SignButton from '../SignButton';

test('renders correctly', () => {
  const tree = renderer.create(<SignButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
