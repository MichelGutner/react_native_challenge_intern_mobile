import { useNavigation } from '@react-navigation/native';
import SanarLogo from '../../components/SanarLogo/SanarLogo/SanarLogo';
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
import Illustration from '../../components/SanarLogo/Illustration/Illustration';

const Onboarding = () => {
  const navigation = useNavigation();

  const onPressGoSignInButton = () => {
    navigation.navigate('SignIn');
  };

  return (
    <Container>
      <ImageLogoOnboarding>
        <SanarLogo />
      </ImageLogoOnboarding>
      <TextTitle>{titleMessage}</TextTitle>
      <TextSubTitle>{subTitleMessage}</TextSubTitle>
      <IllustrationImage>
        <Illustration />
      </IllustrationImage>
      <OnboardingButton onPress={onPressGoSignInButton}>
        <TitleButton>{titleButton}</TitleButton>
      </OnboardingButton>
    </Container>
  );
};

export default Onboarding;
