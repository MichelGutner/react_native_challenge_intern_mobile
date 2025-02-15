import SanarLogoNegativo from '../LogoNegativo/LogoNegativo';
import React from 'react';
import { ActivityIndicator, ModalProps, StatusBar } from 'react-native';
import { Themes } from '../../../themes/themes';
import { ImageLogoSignIn, Modal, ViewContainer } from './styles';

interface Modal extends ModalProps {
  visible: boolean;
}

const Loading = ({ visible }: Modal) => {
  return (
    <Modal visible={visible}>
      <ViewContainer>
        <StatusBar barStyle="light-content" />
        <ImageLogoSignIn>
          <SanarLogoNegativo />
        </ImageLogoSignIn>
        <ActivityIndicator size={35} color={Themes.colors.white} animating />
      </ViewContainer>
    </Modal>
  );
};

export default Loading;
