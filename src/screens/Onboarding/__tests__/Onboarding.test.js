import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import renderer from 'react-test-renderer';
import Onboarding from '../Onboarding';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <NavigationContainer>
        <Onboarding />
      </NavigationContainer>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
