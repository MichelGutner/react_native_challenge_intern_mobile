import SearchArticles from '../../components/searchArticles/SearchArticles';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Alert } from 'react-native';
import ArticlesItem from '../../components/articlesItem/ArticlesItem';
import { getArticles } from '../../services/healthCareApi';

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

  return (
    <ScrollView>
      <FlatList
        data={articles}
        keyExtractor={item => item.title}
        renderItem={renderItem}
      />
      <SearchArticles visible={searchArticles} />
    </ScrollView>
  );
};

export default Articles;
