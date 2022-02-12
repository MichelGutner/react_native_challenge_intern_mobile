import { Themes } from './../../../themes/themes';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Themes.colors.backgroundSanar};
`;

export const ImageLogoSignUp = styled.Image`
  position: absolute;
  width: 152px;
  height: 45px;
  left: 104px;
  top: 96px;
`;

export const InputAreaView = styled.View`
  position: absolute;
  left: 24px;
  top: 213px;
`;

export const ButtonRegister = styled.TouchableOpacity`
  position: absolute;
  width: 312px;
  height: 48px;
  left: 24px;
  top: 421px;
  border-radius: 4px;
  background-color: ${Themes.colors.white};
  align-items: center;
  justify-content: center;
`;

export const TitleButtonRegister = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  display: flex;
  align-items: center;
  text-align: center;

  color: ${Themes.colors.backgroundSanar};
`;

export const RegisterTextAlert = styled.Text`
  position: absolute;
  width: 296px;
  height: 45px;
  left: 32px;
  top: 485px;

  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  text-align: center;

  color: ${Themes.colors.whiteOpacity};
`;
