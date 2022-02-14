import React from 'react';
import renderer from 'react-test-renderer';
import Articles from '../Articles';

test('renders correctly', () => {
  const tree = renderer.create(<Articles />).toJSON();
  expect(tree).toMatchSnapshot();
});
