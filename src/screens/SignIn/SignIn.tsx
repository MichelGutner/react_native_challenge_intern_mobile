import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { Themes } from '../../../themes/themes';
import SignInputs from '../../components/Inputs/SignInputs';
import SignButton from '../../components/SignButton/SignButton';
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

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <ImageLogoSignIn
        source={require('../../components/SanarLogo/Logo-negativo.png')}
      />
      <ImageProfile
        source={require('../../components/SanarLogo/profile.png')}
      />
      <InputAreaView>
        <SignInputs
          placeholderTextColor={Themes.colors.whiteOpacity}
          placeholder="Digite seu e-mail"
        />
        <SignInputs
          placeholderTextColor={Themes.colors.whiteOpacity}
          placeholder="Digite sua senha de acesso"
        />
      </InputAreaView>
      <SignButton
        onPress={() => navigation.navigate('Onboarding')}
        Title="Entrar"
      />
      <RegisterTextView>
        <MessageRegisterView>Não possui um acesso?</MessageRegisterView>
        <SignUpTouchable onPress={() => navigation.navigate('SignUp')}>
          <TitleSignUpTouchable>Cadastre-se aqui</TitleSignUpTouchable>
        </SignUpTouchable>
      </RegisterTextView>
    </Container>
  );
};

export default SignIn;
