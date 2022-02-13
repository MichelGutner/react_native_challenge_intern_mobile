import { doCreateUser } from '../../services/loginAPI';

type Props = {
  username: string;
  email: string;
  password: string;
  onSuccess: () => void;
  onError: () => void;
};

export const handleRequeriRegisterButton = async ({
  username,
  email,
  password,
  onSuccess,
  onError,
}: Props) => {
  const result = await doCreateUser({
    username: username,
    email: email,
    password: password,
  });
  if (result === 'OK') {
    onSuccess();
  } else {
    onError();
  }
};
