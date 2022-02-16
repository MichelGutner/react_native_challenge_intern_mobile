import styled from 'styled-components/native';
import { Themes } from '../../../themes/themes';

export const Modal = styled.Modal`
  flex: 1;
`;

export const ImageLogoSignIn = styled.View`
  position: absolute;
  width: 152px;
  height: 45px;
  left: 104px;
  top: 96px;
`;

export const ViewContainer = styled.View`
  flex: 1;
  background-color: ${Themes.colors.backgroundSanar};
  align-items: center;
  justify-content: center;
`;
