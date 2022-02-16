import { Themes } from './../../../themes/themes';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Themes.colors.backgroundSanar};
`;

export const ImageLogoSignUp = styled.View`
  width: 152px;
  height: 45px;
  left: 104px;
  top: 96px;
`;

export const InputAreaView = styled.View`
  left: 24px;
  top: 172px;
`;

export const ButtonRegister = styled.TouchableOpacity`
  width: 312px;
  height: 48px;
  left: 24px;
  top: 213px;
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
  width: 296px;
  height: 60px;
  left: 32px;
  top: 224px;

  text-align: center;
`;
