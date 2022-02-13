import { handleRequeriRegisterButton } from '../bussiness';
import { doCreateUser } from '../../../services/loginAPI';

// bussiness.doCreateUser = jest.fn();
// jest.mock('../../../services/loginAPI');

jest.mock('../../../services/loginAPI', () => ({
  __esModule: true, // this property makes it work
  doCreateUser: jest.fn(),
}));

test('should call doCreateUser once', () => {
  handleRequeriRegisterButton({
    username: 'michel',
    email: 'michelgutner@gmail.com',
    password: '123456',
    onSuccess: () => {
      return;
    },
    onError: () => {
      return;
    },
  });
  expect(doCreateUser).toHaveBeenCalledTimes(1);
});
