import React from 'react';
import renderer from 'react-test-renderer';
import { InputValidation } from '../InputValidation';

test('renders correctly', () => {
  const tree = renderer.create(<InputValidation />).toJSON();
  expect(tree).toMatchSnapshot();
});
