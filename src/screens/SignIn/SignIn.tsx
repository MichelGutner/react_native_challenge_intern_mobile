import { useNavigation } from '@react-navigation/native';
import Loading from '../../components/loading/Loading';
import React, { useState } from 'react';
import { Alert, StatusBar, Text } from 'react-native';
import { Themes } from '../../../themes/themes';
import { InputValidation } from '../../components/InputValidation/InputValidation';
import SignButton from '../../components/SignButton/SignButton';
import { validationEmail, validationPassword } from '../../utils/Validation';
import { doLoginRequest } from './bussiness';
import {
  Container,
  ImageLogoSignIn,
  ImageProfile,
  InputAreaView,
  MessageRegisterView,
  RegisterTextView,
  SignUpTouchable,
  TitleSignUpTouchable,
} from './styles';

const messageRegister = 'Não possui um acesso?';
const messageRegisterButton = 'Cadastre-se aqui';

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const onPressSignUpButton = () => {
    navigation.navigate('SignUp');
  };

  const onSuccess = () => {
    setLoader(false);
    Alert.alert('Entrou');
  };

  const onError = () => {
    setLoader(false);
    Alert.alert(
      'Dados Icorretos',
      'Caso não tenho Cadastro Clique em Cadastrar',
      [
        { text: 'OK', onPress: () => navigation.navigate('SignIn') },
        { text: 'Cadastre-se', onPress: onPressSignUpButton },
      ]
    );
  };

  const onLoginPressButton = () => {
    setLoader(true);
    if (!validationPassword(password)) {
    }
    if (!validationEmail(email)) {
    }
    doLoginRequest({ email, password, onSuccess, onError });
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <ImageLogoSignIn
        source={require('../../components/SanarLogo/Logo-negativo.png')}
        resizeMode="contain"
      />
      <ImageProfile
        source={require('../../components/SanarLogo/profile.png')}
      />
      <InputAreaView>
        <InputValidation
          password={email}
          placeholder="Digite seu e-mail"
          placeholderTextColor={Themes.colors.whiteOpacity}
          onChangeText={(text: string) => {
            setEmail(text);
          }}
          secureText={false}
          isInputValid={validationEmail(email)}
        />
        <InputValidation
          password={password}
          placeholder="Digite sua senha"
          placeholderTextColor={Themes.colors.whiteOpacity}
          onChangeText={(text: string) => {
            setPassword(text);
          }}
          secureText={true}
          isInputValid={validationPassword(password)}
        />
      </InputAreaView>
      <SignButton onPress={onLoginPressButton} title="Entrar" />
      <RegisterTextView>
        <MessageRegisterView>
          <Text>{messageRegister}</Text>
        </MessageRegisterView>
        <SignUpTouchable onPress={onPressSignUpButton}>
          <TitleSignUpTouchable>{messageRegisterButton}</TitleSignUpTouchable>
        </SignUpTouchable>
      </RegisterTextView>
      <Loading visible={loader} />
    </Container>
  );
};

export default SignIn;
