import { validationEmail } from '../../../utils/Validation';

test('should returns false when email is invalid', () => {
  const result = validationEmail('michelgutner');
  expect(result).toBe(false);
});

test('should returns true when email is valid', () => {
  const result = validationEmail('michelgutner@gmail.com');
  expect(result).toBe(true);
});
