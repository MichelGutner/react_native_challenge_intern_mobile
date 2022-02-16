import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container, Input } from './styles';

type Props = {
  value: string;
  onChangeText: (value: string) => void;
  secureText: boolean;
  isInputValid: boolean;
  placeholder: string;
  placeholderTextColor: string;
};

export const InputValidation = ({
  value,
  placeholder,
  placeholderTextColor,
  onChangeText,
  secureText,
  isInputValid,
}: Props) => {
  return (
    <Container>
      <Input
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureText}
      />
      {isInputValid ? (
        <Icon name={'check'} size={20} color="green" />
      ) : (
        <Icon name={'close'} size={20} color="red" />
      )}
    </Container>
  );
};
