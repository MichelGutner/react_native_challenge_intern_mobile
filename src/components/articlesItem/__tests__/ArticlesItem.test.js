import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import renderer from 'react-test-renderer';
import ArticlesItem from '../ArticlesItem';

test('renders correctly', () => {
  const mockItem = { title: '', date: '', lang: '' };
  const result = <ArticlesItem item={mockItem} />;
  const tree = renderer
    .create(<NavigationContainer>{result}</NavigationContainer>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
