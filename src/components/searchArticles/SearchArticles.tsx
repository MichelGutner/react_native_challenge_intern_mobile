import React from 'react';
import { Themes } from '../../../themes/themes';
import { Container, TextInput } from './styles';

const SearchArticles = () => {
  return (
    <Container>
      <TextInput
        maxLength={15}
        placeholder="Buscar..."
        placeholderTextColor={Themes.colors.white}
      />
    </Container>
  );
};

export default SearchArticles;
