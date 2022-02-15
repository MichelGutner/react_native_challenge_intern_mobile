import { Themes } from './../../../themes/themes';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 350px;
  height: 120px;
  background-color: ${Themes.colors.white};
  justify-content: space-around;
  margin: 7px;
  elevation: 5;
  border-radius: 10px;
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
  color: ${Themes.colors.TitleOnboarding};
  margin-top: 10px;
  margin-left: 10px;
`;
export const Language = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${Themes.colors.TitleOnboarding};
  margin-top: 10px;
  margin-left: 190px;
`;

export const BottomBody = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const HeaderBody = styled.View`
  height: 80px;
  margin-top: 8px;
  margin-bottom: 20px;
  background-color: ${Themes.colors.backgroundSanar};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
