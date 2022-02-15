import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import renderer from 'react-test-renderer';
import ArticleDetails from '../ArticleDetails';

test('renders correctly', () => {
  const route = {
    route: {
      params: { item: { title: 'TITLE', date: '2010/08/2021', lang: 'US' } },
    },
  };
  const tree = renderer
    .create(
      <NavigationContainer>
        <ArticleDetails {...route} />
      </NavigationContainer>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

//  const article = props.route.params.item;
