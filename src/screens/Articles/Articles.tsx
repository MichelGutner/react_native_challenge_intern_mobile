import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { Header } from 'react-native-elements';
import { Themes } from '../../../themes/themes';
import ArticlesItem from '../../components/articlesItem/ArticlesItem';
import SearchArticles from '../../components/searchArticles/SearchArticles';
import { getArticles } from '../../services/healthCareApi';
import { ArticlesLenght, Container } from './styles';

const renderItem = ({ item }: any) => <ArticlesItem item={item} />;

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles(
      json => {
        setArticles(json.articles);
      },
      () => {
        Alert.alert('Algum erro aconteceu');
      }
    );
  }, []);

  const articlesLength = articles.length;

  return (
    <Container>
      <Header
        containerStyle={{
          backgroundColor: Themes.colors.backgroundSanar,
        }}
        placement="left"
        leftComponent={
          <ArticlesLenght>
            {articlesLength + ' Artigos encontrado'}
          </ArticlesLenght>
        }
        centerComponent={<SearchArticles />}
        rightComponent={{
          icon: 'search',
          color: '#fff',
        }}
      />
      <FlatList
        data={articles}
        keyExtractor={item => item.title.toString()}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default Articles;
