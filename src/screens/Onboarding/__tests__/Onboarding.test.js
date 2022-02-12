import React from 'react';
import renderer from 'react-test-renderer';
import Onboarding from '../Onboarding';

test('renders correctly', () => {
  const tree = renderer.create(<Onboarding />).toJSON();
  expect(tree).toMatchSnapshot();
});