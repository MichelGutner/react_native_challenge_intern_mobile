import React, { useState } from 'react';
import { StatusBar, Text, Alert, View, TouchableOpacity } from 'react-native';
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

// import { handleRequeriRegisterButton, handleSignIn } from './bussiness';
import { doLogin } from '../../services/loginAPI';
import { useNavigation } from '@react-navigation/native';

const messageRegister = 'Não possui um acesso?';
const messageRegisterButton = 'Cadastre-se aqui';

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const result = await doLogin({ email: email, password: password });
    if (result === 'FORBIDDEN') {
      Alert.alert('resultado', result);
    } else {
      Alert.alert('Entrou');
    }
    // const listErrors = validateLogin(email, password);
    // console.log(listErrors);
    // if (listErrors.length >= 0) {
    //   console.log('e', 'erro');
    // }
  };

  const validateLogin = (email: string, password: string) => {
    const listErrors = [];
    // bloco email
    if (email === null || email === '') {
      for (let i = 0; i < email.length; i++) {
        const character = email.charAt(i);
        if (character === '@') {
          listErrors.push('O e-mail deve possuir arroba(@)');
        }

        if (character === '@') {
          listErrors.push('O e-mail deve possuir arroba(@)');
        }
      }

      listErrors.push('Validação de email');
    }

    // bloco password
    if (password === null || password === '') {
      let letterUpper = false;
      let letterLower = false;
      let haveNumber = false;
      let haveSpecialCharacter = false;

      // Mínimo de 8 caracteres.
      if (password.length < 8) {
        listErrors.push('A senha precisa de pelo menos 8 caracteres');
      }

      // Pelo menos 1 caractere maiúsculo.
      // Pelo menos 1 caractere minúsculo.
      // Pelo menos 1 dígito.
      for (let i = 0; i < password.length; i++) {
        // UpperCase
        const character = password.charAt(i);
        if (
          character === character.toUpperCase() &&
          character !== character.toLowerCase()
        )
          letterUpper = true;

        // LowerCase
        if (
          character === character.toLowerCase() &&
          character !== character.toUpperCase()
        )
          letterLower = true;

        // IsNumeric
        if (!isNaN(parseFloat(character)) && isFinite(parseInt(character))) {
          haveNumber = true;
        }

        if (!/^[a-zA-Z0-9]+$/.test(character)) {
          haveSpecialCharacter = true;
        }
      }

      if (!letterUpper)
        listErrors.push('A senha precisa de pelo menos 1 caracter maiusculo');

      if (!letterLower)
        listErrors.push('A senha precisa de pelo menos 1 caracter minusculo');

      if (!haveNumber) {
        listErrors.push('A senha precisa de pelo menos 1 digito');
      }

      if (haveSpecialCharacter) {
        listErrors.push('A senha precisa de pelo menos 1 caracter especial');
      }
    }
    return listErrors;
  };

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
          value={email}
          onChangeText={(text: string) => setEmail(text)}
        />
        <SignInputs
          placeholderTextColor={Themes.colors.whiteOpacity}
          placeholder="Digite sua senha de acesso"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          secureTextEntry={true}
        />
      </InputAreaView>
      <SignButton onPress={handleLogin} title="Entrar" />
      <RegisterTextView>
        <MessageRegisterView>
          <Text>{messageRegister}</Text>
        </MessageRegisterView>
        <SignUpTouchable onPress={() => navigation.navigate('SignUp')}>
          <TitleSignUpTouchable>{messageRegisterButton}</TitleSignUpTouchable>
        </SignUpTouchable>
      </RegisterTextView>
    </Container>
  );
};

export default SignIn;
