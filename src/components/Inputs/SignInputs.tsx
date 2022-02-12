import React from 'react';
import styled from 'styled-components/native';

const Input = styled.TextInput`
  margin-top: 16px;
  width: 312px;
  height: 48px;
  background-color: #0050f0;
  border: 1px solid #ffffff;
  border-radius: 4px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const SignInputs = ({ ...rest }) => {
  return <Input {...rest}></Input>;
};

export default SignInputs;
