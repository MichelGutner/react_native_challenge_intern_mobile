import styled from 'styled-components/native';
import { Themes } from './../../../themes/themes';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Themes.colors.backgroundSanar};
`;

export const ImageLogoSignIn = styled.Image`
  width: 152px;
  height: 45px;
  left: 104px;
  margin-top: 96px;
`;
export const ImageProfile = styled.Image`
  width: 94px;
  height: 94px;
  left: 133px;
  top: 44px;
`;

export const InputAreaView = styled.View`
  left: 24px;
  top: 55px;
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

export const RegisterTextView = styled.View`
  flex-direction: row;
  width: 100%;
  height: 24px;
  top: 110px;
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
