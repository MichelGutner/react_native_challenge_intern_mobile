import React from 'react';
import renderer from 'react-test-renderer';
import SanarLogoNegativo from '../LogoNegativo';
test('renders correctly', () => {
  const tree = renderer.create(<SanarLogoNegativo />).toJSON();
  expect(tree).toMatchSnapshot();
});
