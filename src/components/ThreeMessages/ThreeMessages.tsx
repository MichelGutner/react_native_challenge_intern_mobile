import React from 'react';
import { MessageText, RegisterText } from './styles';

type Props = {
  initialText: string;
  registerText: string;
  finishText: string;
};

export const ThreeMessages = ({
  initialText,
  registerText,
  finishText,
}: Props) => {
  return (
    <>
      <MessageText>{initialText}</MessageText>
      <RegisterText>{registerText}</RegisterText>
      <MessageText>{finishText}</MessageText>
    </>
  );
};
