import { doLogin } from '../../services/loginAPI';

type Props = {
  email: string;
  password: string;
  onSuccess: () => void;
  onError: () => void;
};

export const doLoginRequest = async ({
  email,
  password,
  onSuccess,
  onError,
}: Props) => {
  const result = await doLogin({
    email,
    password,
    onSuccess,
    onError,
  });
  if (result === 'FORBIDDEN') {
    onError();
  } else {
    onSuccess();
  }
  // const listErrors = validateLogin(email, password);
  // console.log(listErrors);
  // if (listErrors.length >= 0) {
  //   console.log('e', 'erro');
  // }
};
