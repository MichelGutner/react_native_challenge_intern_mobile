import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, StatusBar, Text } from 'react-native';
import { Themes } from '../../../themes/themes';
import SignInputs from '../../components/Inputs/SignInputs';
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

  const onPressSignUpButton = () => {
    navigation.navigate('SignUp');
  };

  const onSuccess = () => {
    Alert.alert('Entrou');
    // setLoader(false);
  };

  const onError = () => {
    Alert.alert('Dados Invalidos');
  };

  const onLoginPressButton = () => {
    // setLoader(true)
    //    if(email && password)validateEmail({ email });
    if (!validationPassword(password)) {
      console.log('Alerta password Incorreto');
      return;
    }
    if (!validationEmail(email)) {
      console.log('Alerta email Incorreto');
      return;
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
    </Container>
  );
};

export default SignIn;
