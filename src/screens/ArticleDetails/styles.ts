import { Themes } from './../../../themes/themes';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 20px;
  background-color: ${Themes.colors.whiteOpacity};
`;

export const Title = styled.Text`
  color: ${Themes.colors.backgroundSanar};
  font-size: 26px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  background-color: transparent;
  margin: 2px;
`;
