import React from 'react';
import { Text } from 'react-native';
import { Themes } from '../../../themes/themes';
import SignInputs from '../../components/Inputs/SignInputs';
import {
  ButtonRegister,
  Container,
  ImageLogoSignUp,
  InputAreaView,
  RegisterTextAlert,
  TitleButtonRegister,
} from './styles';

const FinishRegisterText = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => (
  <Text style={{ fontWeight: 'bold', color: Themes.colors.white }}>
    {props.children}
  </Text>
);

const SignUp = () => {
  return (
    <Container>
      <ImageLogoSignUp
        source={require('../../components/SanarLogo/Logo-negativo.png')}
      />
      <InputAreaView>
        <SignInputs
          placeholderTextColor={Themes.colors.whiteOpacity}
          placeholder="Digite seu nome"
        />
        <SignInputs
          placeholderTextColor={Themes.colors.whiteOpacity}
          placeholder="Digite seu e-mail"
        />
        <SignInputs
          placeholderTextColor={Themes.colors.whiteOpacity}
          placeholder="Defina uma senha"
        />
      </InputAreaView>
      <ButtonRegister>
        <TitleButtonRegister>Finalizar Cadastro</TitleButtonRegister>
      </ButtonRegister>
      <RegisterTextAlert>
        Ao clicar em{' '}
        <FinishRegisterText>“Finalizar cadastro”</FinishRegisterText> você
        estará aceitando também nossos termos e condições.
      </RegisterTextAlert>
    </Container>
  );
};

export default SignUp;
