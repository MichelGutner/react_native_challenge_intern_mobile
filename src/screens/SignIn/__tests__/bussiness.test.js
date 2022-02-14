import { doLoginRequest } from '../bussiness';
import { doLogin } from '../../../services/loginAPI';

jest.mock('../../../services/loginAPI', () => ({
  __esModule: true,
  doLogin: jest.fn(),
}));

test('should call doLoginRequest once', () => {
  doLoginRequest({
    username: '',
    email: '',
    password: '',
    onSuccess: () => {
      return;
    },
    onError: () => {
      return;
    },
  });
  expect(doLogin).toHaveBeenCalledTimes(1);
});
