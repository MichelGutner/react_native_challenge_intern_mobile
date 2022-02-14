import React from 'react';
import { Modal, ModalProps } from 'react-native';
import { Container } from './styles';

interface Props extends ModalProps {
  visible: boolean;
}

const SearchArticles = ({ visible }: Props) => {
  return (
    <Modal visible={visible} animationType={'slide'}>
      <Container></Container>
    </Modal>
  );
};

export default SearchArticles;
