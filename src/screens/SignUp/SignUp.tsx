import { useNavigation } from '@react-navigation/native';
import { InputValidation } from '../../components/InputValidation/InputValidation';
import React, { useState } from 'react';
import { Alert, Text } from 'react-native';
import { Themes } from '../../../themes/themes';
import Loading from '../../components/loading/Loading';
import { handleRequeriRegisterButton } from './bussiness';
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
  const [loading, setLoading] = useState(false);

  const onSuccess = () => {
    setLoading(false);
    Alert.alert('Sucesso', 'Clique em OK para ir para tela de login', [
      { text: 'OK', onPress: () => navigation.navigate('SignIn') },
    ]);
  };
  const onError = () => {
    setLoading(false);
  };

  const onSignUpPressButton = () => {
    setLoading(true);
    handleRequeriRegisterButton({
      username,
      email,
      password,
      onSuccess,
      onError,
    });
  };
  return (
    <Container>
      <ImageLogoSignUp
        source={require('../../components/SanarLogo/Logo-negativo.png')}
      />
      <InputAreaView>
        <InputValidation
          value={username}
          onChangeText={(text: string) => {
            setUserName(text);
          }}
          secureText={false}
          isInputValid={false}
          placeholder={'Digite seu nome'}
          placeholderTextColor={Themes.colors.white}
        />
        <InputValidation
          value={email}
          onChangeText={(text: string) => {
            setEmail(text);
          }}
          secureText={false}
          isInputValid={false}
          placeholder={'Digite seu e-mail'}
          placeholderTextColor={Themes.colors.white}
        />
        <InputValidation
          value={password}
          onChangeText={(text: string) => {
            setPassword(text);
          }}
          secureText={true}
          isInputValid={false}
          placeholder={'Digite sua senha'}
          placeholderTextColor={Themes.colors.white}
        />
      </InputAreaView>
      <ButtonRegister onPress={onSignUpPressButton}>
        <TitleButtonRegister>Finalizar Cadastro</TitleButtonRegister>
      </ButtonRegister>
      <RegisterTextAlert>
        Ao clicar em{' '}
        <FinishRegisterText>“Finalizar cadastro”</FinishRegisterText> você
        estará aceitando também nossos termos e condições.
      </RegisterTextAlert>
      <Loading visible={loading} />
    </Container>
  );
};

export default SignUp;
