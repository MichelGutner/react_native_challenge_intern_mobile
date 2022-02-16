import { validationEmail, validationPassword } from '../Validation';

test('signIn should returns false when email is invalid', () => {
  const result = validationEmail('michelgutner');
  expect(result).toBe(false);
});

test('signIn/signUp should returns true when email is valid', () => {
  const result = validationEmail('michelgutner@gmail.com');
  expect(result).toBe(true);
});
test('signIn/signUp should returns false when password is invalid', () => {
  const result = validationPassword('123456789');
  expect(result).toBe(false);
});
test('signIn/signUp should returns true false email is valid', () => {
  const result = validationPassword('Gutner@654');
  expect(result).toBe(true);
});
