import { Themes } from './../../../themes/themes';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 140px;
  height: 25px;
  justify-content: center;
  background-color: ${Themes.colors.almostTransparent};
  border-radius: 20px;
`;

export const TextInput = styled.TextInput`
  color: ${Themes.colors.white};
  padding-left: 20px;
  padding-bottom: 2px;
  font-size: 13px;
`;
