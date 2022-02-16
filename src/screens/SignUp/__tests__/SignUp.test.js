import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import renderer from 'react-test-renderer';
import SignUp from '../SignUp';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <NavigationContainer>
        <SignUp />
      </NavigationContainer>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
