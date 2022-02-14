import React from 'react';
import renderer from 'react-test-renderer';
import ArticlesItem from '../ArticlesItem';

test('renders correctly', () => {
  const tree = renderer.create(<ArticlesItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
