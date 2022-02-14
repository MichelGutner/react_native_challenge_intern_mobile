import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import renderer from 'react-test-renderer';
import ArticleDetails from '../ArticleDetails';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <NavigationContainer>
        <ArticleDetails />
      </NavigationContainer>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
