import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Text } from 'react-native';
import { Themes } from '../../../themes/themes';
import SignInputs from '../../components/Inputs/SignInputs';
import { doCreateUser } from '../../services/loginAPI';
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
  const navigation = useNavigation();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    const result = await doCreateUser({
      username: username,
      email: email,
      password: password,
    });
    if (result === 'OK') {
      Alert.alert('Conta criada com sucesso.');
      navigation.navigate('SignIn');
    }
  };

  return (
    <Container>
      <ImageLogoSignUp
        source={require('../../components/SanarLogo/Logo-negativo.png')}
      />
      <InputAreaView>
        <SignInputs
          placeholderTextColor={Themes.colors.whiteOpacity}
          placeholder="Digite seu nome"
          value={username}
          onChangeText={(text: string) => setUserName(text)}
        />
        <SignInputs
          placeholderTextColor={Themes.colors.whiteOpacity}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={(text: string) => setEmail(text)}
        />
        <SignInputs
          placeholderTextColor={Themes.colors.whiteOpacity}
          placeholder="Defina uma senha"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
        />
      </InputAreaView>
      <ButtonRegister onPress={handleSubmit}>
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
