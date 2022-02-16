import React from 'react';
import renderer from 'react-test-renderer';
import SanarProfileLogo from '../SanarProfileLogo';
test('renders correctly', () => {
  const tree = renderer.create(<SanarProfileLogo />).toJSON();
  expect(tree).toMatchSnapshot();
});
