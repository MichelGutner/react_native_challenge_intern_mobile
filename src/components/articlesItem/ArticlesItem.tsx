import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Container, Date, Language, Title } from './styles';

const ArticlesItem = item => {
  const navigation = useNavigation();
  const { title, date, lang } = item.item;

  const data = date;

  const formatDate = data.replace(/00:00:00/g, '').replace(/\+0000/g, '');

  return (
    <View>
      <Container onPress={() => navigation.navigate('ArticleDetails', item)}>
        <Title>{title}</Title>
        <Date>{formatDate}</Date>
        <Language>{lang}</Language>
      </Container>
    </View>
  );
};

export default ArticlesItem;
