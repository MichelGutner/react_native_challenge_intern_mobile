import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { Themes } from '../../../themes/themes';

type TouchableType = TouchableOpacityProps;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Themes.colors.white};
`;

export const ImageLogoOnboarding = styled.Image`
  position: absolute;
  width: 152px;
  height: 45px;
  left: 104px;
  top: 64px;
`;

export const TextTitle = styled.Text`
  position: absolute;
  width: 328px;
  height: 55px;
  left: 16px;
  top: 141px;

  font-family: Red Hat Display;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  color: ${Themes.colors.TitleOnboarding};
`;

export const TextSubTitle = styled.Text`
  position: absolute;
  width: 328px;
  height: 44px;
  left: 16px;
  top: 212px;

  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  text-align: center;
`;

export const IllustrationImage = styled.Image`
  position: absolute;
  width: 360px;
  height: 202px;
  top: 280px;
`;

export const OnboardingButton = styled.TouchableOpacity<TouchableType>`
  position: absolute;
  width: 312px;
  height: 48px;
  left: 24px;
  top: 552px;
  align-items: center;
  justify-content: center;

  background-color: ${Themes.colors.buttonOnboarding}

  border-radius: 4px;
`;

export const TitleButton = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: ${Themes.colors.white};
`;
