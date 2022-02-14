import { doCreateRequest } from '../bussiness';
import { doCreateUser } from '../../../services/loginAPI';

jest.mock('../../../services/loginAPI', () => ({
  __esModule: true,
  doCreateUser: jest.fn(),
}));

test('should call doCreateUser once', () => {
  doCreateRequest({
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
