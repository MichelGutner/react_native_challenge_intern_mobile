import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from '../SignIn';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <NavigationContainer>
        <SignIn />
      </NavigationContainer>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
