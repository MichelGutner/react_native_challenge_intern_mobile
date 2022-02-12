import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Container,
  IllustrationImage,
  ImageLogoOnboarding,
  OnboardingButton,
  TextSubTitle,
  TextTitle,
  TitleButton,
} from './styles';

const Onboarding = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ImageLogoOnboarding
        source={require('../../components/SanarLogo/logo-sanar.png')}
        resizeMode="contain"
      />
      <TextTitle>
        Temos uma solução para cada etapa da sua carreira na medicina
      </TextTitle>
      <TextSubTitle>
        Existimos para te ajudar em cada passo dessa incrível missão de cuidar
        de vidas.
      </TextSubTitle>
      <IllustrationImage
        source={require('../../components/SanarLogo/illustration.png')}
        resizeMode="contain"
      />
      <OnboardingButton onPress={() => navigation.navigate('SignIn')}>
        <TitleButton>Começar Agora</TitleButton>
      </OnboardingButton>
    </Container>
  );
};

export default Onboarding;
