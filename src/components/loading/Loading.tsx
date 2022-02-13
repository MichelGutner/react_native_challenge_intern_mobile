import { ActivityIndicator, ModalProps, StatusBar } from 'react-native';
import React from 'react';
import { Themes } from '../../../themes/themes';
import { Modal, ImageLogoSignIn, ViewContainer } from './styles';

interface Modal extends ModalProps {
  visible: boolean;
  onClose: boolean;
}

const Loading = ({ visible, onClosed }: Modal) => {
  const onClose = () => {
    onClosed();
  };

  return (
    <Modal visible={visible}>
      <ViewContainer>
        <StatusBar barStyle="light-content" />
        <ImageLogoSignIn
          source={require('../../components/SanarLogo/Logo-negativo.png')}
        />
        <ActivityIndicator size={35} color={Themes.colors.white} animating />
      </ViewContainer>
    </Modal>
  );
};

export default Loading;
