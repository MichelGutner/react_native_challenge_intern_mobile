import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StatusBar, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Loading from '../../components/loading/Loading';
import {
  BottomBody,
  Container,
  Date,
  HeaderBody,
  Language,
  Title,
} from './styles';

const ArticlesItem = item => {
  const navigation = useNavigation();
  console.log(item);
  console.log(item.item);
  const { title, date, lang } = item.item;
  const [loader, setLoader] = useState(false);

  // const formatDate = date.replace(/00:00:00/g, '').replace(/\+0000/g, '');

  const openArticleItem = () => {
    setLoader(true);
    navigation.navigate('ArticleDetails', item);
    return;
  };

  return (
    <RectButton activeOpacity={0.8} onPress={openArticleItem}>
      <StatusBar barStyle={'light-content'} backgroundColor="transparent" />
      <Container>
        <HeaderBody>
          <Title>{title}</Title>
        </HeaderBody>
        <BottomBody>
          <Date>{date}</Date>
          <Language>
            {lang === 'es' ? (
              <Text style={{ color: 'green' }}>{lang} 🇪🇸</Text>
            ) : (
              <Text style={{ color: 'red' }}>{lang} 🇺🇸</Text>
            )}
          </Language>
        </BottomBody>
      </Container>
      <Loading visible={loader} />
    </RectButton>
  );
};

export default ArticlesItem;
