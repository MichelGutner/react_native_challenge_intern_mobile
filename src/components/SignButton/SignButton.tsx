import React from 'react';
import { Button, TitleButton } from './styles';

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
