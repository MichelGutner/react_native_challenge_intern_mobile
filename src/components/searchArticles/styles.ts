import { Themes } from './../../../themes/themes';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 140px;
  height: 25px;
  justify-content: center;
`;

export const TextInput = styled.TextInput`
  border-radius: 20px;
  color: ${Themes.colors.white};
  padding-left: 20px;
  padding-bottom: 2px;
  font-size: 13px;
  border-bottom-width: 0.25px;
  border-color: ${Themes.colors.white};
`;
