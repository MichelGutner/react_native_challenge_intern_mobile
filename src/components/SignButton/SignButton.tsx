import React from 'react';
import styled from 'styled-components/native';
import { Themes } from '../../../themes/themes';

const Button = styled.TouchableOpacity`
  width: 312px;
  height: 48px;
  left: 24px;
  top: 96px;
  border-radius: 4px;
  background-color: ${Themes.colors.white};
  align-items: center;
  justify-content: center;
`;

const TitleButton = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  display: flex;
  align-items: center;
  text-align: center;

  color: ${Themes.colors.backgroundSanar};
`;

type TextProps = {
  title: string;
  onPress: any;
};

const SignButton = ({ title, onPress, ...rest }: TextProps) => {
  return (
    <Button {...rest} onPress={onPress}>
      <TitleButton>{title}</TitleButton>
    </Button>
  );
};

export default SignButton;
