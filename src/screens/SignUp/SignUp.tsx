import { useNavigation } from '@react-navigation/native';
import SanarLogoNegativo from '../../components/LogoNegativo/LogoNegativo';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Themes } from '../../../themes/themes';
import { InputValidation } from '../../components/InputValidation/InputValidation';
import Loading from '../../components/Loading/Loading';
import { ThreeMessages } from '../../components/ThreeMessages/ThreeMessages';
import { validationEmail, validationPassword } from '../../utils/Validation';
import { doCreateRequest } from './bussiness';
import {
  ButtonRegister,
  Container,
  ImageLogoSignUp,
  InputAreaView,
  RegisterTextAlert,
  TitleButtonRegister,
} from './styles';

const SignUp = () => {
  const navigation = useNavigation();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const onPressRegisterButtonGoBack = () => {
    navigation.navigate('SignIn');
  };
  const finishRegister = 'Finalizar Cadastro';

  const onSuccess = () => {
    setLoading(false);
    Alert.alert(
      'Sucesso',
      'Clique em OK para ser redirecionado para tela de login',
      [{ text: 'OK', onPress: onPressRegisterButtonGoBack }]
    );
  };
  const onError = () => {
    setLoading(false);
  };

  const onSignUpPressButton = () => {
    setLoading(true);
    {
      if (!validationEmail(email)) {
        Alert.alert('Insira um email válido');
        setLoading(false);
        return;
      }
      if (!validationPassword(password)) {
        Alert.alert('Insira uma senha válida');
        setLoading(false);
        return;
      }
      doCreateRequest({
        username,
        email,
        password,
        onSuccess,
        onError,
      });
    }
  };

  return (
    <Container>
      <ImageLogoSignUp>
        <SanarLogoNegativo />
      </ImageLogoSignUp>
      <InputAreaView>
        <InputValidation
          value={username}
          onChangeText={(text: string) => {
            setUserName(text);
          }}
          secureText={false}
          isInputValid={username}
          placeholder={'Digite seu nome'}
          placeholderTextColor={Themes.colors.white}
        />
        <InputValidation
          value={email}
          onChangeText={(text: string) => {
            setEmail(text);
          }}
          secureText={false}
          isInputValid={validationEmail(email)}
          placeholder={'Digite seu e-mail'}
          placeholderTextColor={Themes.colors.white}
        />
        <InputValidation
          value={password}
          onChangeText={(text: string) => {
            setPassword(text);
          }}
          secureText={true}
          isInputValid={validationPassword(password)}
          placeholder={'Digite sua senha'}
          placeholderTextColor={Themes.colors.white}
        />
      </InputAreaView>
      <ButtonRegister onPress={onSignUpPressButton}>
        <TitleButtonRegister>{finishRegister}</TitleButtonRegister>
      </ButtonRegister>
      <RegisterTextAlert>
        <ThreeMessages
          initialText={'Ao clicar em'}
          registerText={' "Finilizar Cadastro" '}
          finishText={'você estará aceitando também nossos termos e condições.'}
        />
      </RegisterTextAlert>
      <Loading visible={loading} />
    </Container>
  );
};

export default SignUp;
