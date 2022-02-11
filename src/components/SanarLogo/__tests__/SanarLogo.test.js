import React from 'react';
import renderer from 'react-test-renderer';
import SanarLogo from '../SanarLogo';

test('renders correctly', () => {
  const tree = renderer.create(<SanarLogo />).toJSON();
  expect(tree).toMatchSnapshot();
});