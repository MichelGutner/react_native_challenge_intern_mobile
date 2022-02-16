import React from 'react';
import renderer from 'react-test-renderer';
import Illustration from '../Illustration';
test('renders correctly', () => {
  const tree = renderer.create(<Illustration />).toJSON();
  expect(tree).toMatchSnapshot();
});
