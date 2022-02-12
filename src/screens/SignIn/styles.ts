import { Themes } from './../../../themes/themes';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Themes.colors.backgroundSanar};
`;

export const ImageLogoSignIn = styled.Image`
  position: absolute;
  width: 152px;
  height: 45px;
  left: 104px;
  top: 96px;
`;
export const ImageProfile = styled.Image`
  position: absolute;
  width: 94px;
  height: 94px;
  left: 133px;
  top: 185px;
`;

export const InputAreaView = styled.View`
  position: absolute;
  left: 24px;
  top: 315px;
`;

export const RegisterTextView = styled.View`
  flex-direction: row;
  position: absolute;
  width: 100%;
  height: 24px;
  top: 523px;
  justify-content: center;
`;

export const MessageRegisterView = styled.Text`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  text-align: center;

  color: ${Themes.colors.whiteOpacity};
`;

export const SignUpTouchable = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const TitleSignUpTouchable = styled.Text`
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  text-align: center;

  color: ${Themes.colors.white};
`;
