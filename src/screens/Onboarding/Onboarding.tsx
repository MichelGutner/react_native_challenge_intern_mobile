import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { subTitleMessage, titleButton, titleMessage } from './bussiness';
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

  const onPressGoSignInButton = () => {
    navigation.navigate('SignIn');
  };

  return (
    <Container>
      <ImageLogoOnboarding
        source={require('../../components/SanarLogo/logo-sanar.png')}
        resizeMode="contain"
      />
      <TextTitle>{titleMessage}</TextTitle>
      <TextSubTitle>{subTitleMessage}</TextSubTitle>
      <IllustrationImage
        source={require('../../components/SanarLogo/illustration.png')}
        resizeMode="contain"
      />
      <OnboardingButton onPress={onPressGoSignInButton}>
        <TitleButton>{titleButton}</TitleButton>
      </OnboardingButton>
    </Container>
  );
};

export default Onboarding;
