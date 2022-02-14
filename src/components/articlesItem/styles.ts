import { Themes } from './../../../themes/themes';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 350px;
  height: 120px;
  background-color: ${Themes.colors.backgroundSanar};
  justify-content: space-around;
  border-radius: 10px;
  margin: 5px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: ${Themes.colors.white};
  margin-left: 10px;
`;
export const Date = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${Themes.colors.whiteOpacity};
  margin-top: 10px;
  margin-left: 10px;
`;
export const Language = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${Themes.colors.whiteOpacity};
  margin-top: 10px;
  margin-left: 190px;
`;

export const SepartorLine = styled.View`
  width: 100%;
  height: 1px;
  background-color: #fff;
`;

export const BottomBody = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;
