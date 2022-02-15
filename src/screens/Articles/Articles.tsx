import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import ArticlesItem from '../../components/articlesItem/ArticlesItem';
import SearchArticles from '../../components/searchArticles/SearchArticles';
import { getArticles } from '../../services/healthCareApi';
import { Container } from './styles';

const renderItem = ({ item }) => <ArticlesItem item={item} />;

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [searchArticles, setSearchArticles] = useState(false);

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

  console.log(articles.length);
  return (
    <Container>
      <FlatList
        data={articles}
        keyExtractor={item => item.title}
        renderItem={renderItem}
      />
      <SearchArticles visible={searchArticles} />
    </Container>
  );
};

export default Articles;
