import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import renderer from 'react-test-renderer';
import { validationEmail, validationPassword } from '../../../utils/Validation';
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

test('should returns false when email is invalid', () => {
  const result = validationEmail('michel-gutner');
  expect(result).toBe(false);
});

test('should returns true when email is valid', () => {
  const result = validationEmail('michel-gutner@gmail.com');
  expect(result).toBe(true);
});
test('should returns false when password is invalid', () => {
  const result = validationPassword('123456789');
  expect(result).toBe(false);
});
test('should returns true false email is valid', () => {
  const result = validationPassword('Gutner@654');
  expect(result).toBe(true);
});
