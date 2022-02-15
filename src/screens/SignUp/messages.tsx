import React from 'react';
import styled from 'styled-components/native';
import { Themes } from '../../../themes/themes';

type Props = {
  initialText: string;
  registerText: string;
  finishText: string;
};

export const finishRegister = 'Finalizar Cadastro';

export const Messages = ({ initialText, registerText, finishText }: Props) => {
  return (
    <>
      <MessageText>{initialText}</MessageText>
      <RegisterText>{registerText}</RegisterText>
      <MessageText>{finishText}</MessageText>
    </>
  );
};

const MessageText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: ${Themes.colors.whiteOpacity};
`;
const RegisterText = styled.Text`
  font-weight: bold;
  color: ${Themes.colors.white};
`;
