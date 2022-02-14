import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Container, Date, Language, Title } from './styles';

const ArticlesItem = item => {
  const navigation = useNavigation();
  const { title, date, lang } = item;

  return (
    <View>
      <Container onPress={() => navigation.navigate('ArticleDetails', item)}>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Language>{lang}</Language>
      </Container>
    </View>
  );
};

export default ArticlesItem;