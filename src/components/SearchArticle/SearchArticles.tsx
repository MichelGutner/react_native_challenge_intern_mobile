import React from 'react';
import { Themes } from '../../../themes/themes';
import { Container, TextInput } from './styles';

const SearchArticles = ({ value, onChangeText }) => {
  return (
    <Container>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        maxLength={15}
        placeholder="Buscar..."
        placeholderTextColor={Themes.colors.white}
      />
    </Container>
  );
};

export default SearchArticles;
