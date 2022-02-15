import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Loading from '../../components/loading/Loading';
import {
  BottomBody,
  Container,
  Date,
  EnLanguage,
  EsLanguage,
  HeaderBody,
  Language,
  Title,
} from './styles';

const ArticlesItem = item => {
  const navigation = useNavigation();
  const { title, date, lang } = item.item;
  const [loader, setLoader] = useState(false);

  const formatDate = date.replace(/00:00:00/g, '').replace(/\+0000/g, '');

  const openArticleItem = () => {
    setLoader(true);
    navigation.navigate('ArticleDetails', item);
    setLoader(false);
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
          <Date>{formatDate}</Date>
          <Language>
            {lang === 'es' ? (
              <EsLanguage>{lang} 🇪🇸</EsLanguage>
            ) : (
              <EnLanguage>{lang} 🇺🇸</EnLanguage>
            )}
          </Language>
        </BottomBody>
      </Container>
      <Loading visible={loader} />
    </RectButton>
  );
};

export default ArticlesItem;
