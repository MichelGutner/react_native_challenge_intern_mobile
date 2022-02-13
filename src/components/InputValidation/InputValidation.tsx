import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import SignInputs from '../../components/Inputs/SignInputs';
import { Container } from './styles';

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
      <SignInputs
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureText}
      />
      {isInputValid ? (
        <Icon
          style={{ marginTop: 20 }}
          name={'check'}
          size={20}
          color="green"
        />
      ) : (
        <Icon style={{ marginTop: 20 }} name={'close'} size={20} color="red" />
      )}
    </Container>
  );
};
