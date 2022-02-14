import SearchArticles from '../../components/searchArticles/SearchArticles';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import ArticlesItem from '../../components/articlesItem/ArticlesItem';
import { getArticles } from '../../services/healthCareApi';

const renderItem = ({ item }) => <ArticlesItem item={item} />;

const Articles = ({ onPress }) => {
  const [articles, setArticles] = useState([]);
  const [searchArticles, setSearchArticles] = useState(false);

  useEffect(() => {
    getArticles(
      json => {
        console.log(json.articles[1]);
        setArticles(json.articles);
      },
      error => {
        console.log(error);
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
