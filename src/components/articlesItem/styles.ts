import { Themes } from './../../../themes/themes';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 170px;
  height: 120px;
  background-color: ${Themes.colors.backgroundSanar};
  border-radius: 10px;
  margin: 5px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${Themes.colors.white};
`;
export const Date = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${Themes.colors.whiteOpacity};
`;
export const Language = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${Themes.colors.whiteOpacity};
`;
