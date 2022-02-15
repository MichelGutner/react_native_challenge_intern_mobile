import React from 'react';
import styled from 'styled-components/native';

const Input = styled.TextInput`
  width: 290px;
  height: 48px;
  border-radius: 4px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
`;

const SignInputs = ({ ...rest }) => {
  return <Input {...rest}></Input>;
};

export default SignInputs;
