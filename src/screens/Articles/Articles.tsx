import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import ArticlesItem from '../../components/articlesItem/ArticlesItem';
import { getArticles } from '../../services/healthCareApi';

const renderItem = ({ item }) => <ArticlesItem item={item} />;

const Articles = () => {
  const [articles, setArticles] = useState([]);

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
        numColumns={2}
        keyExtractor={item => item.title}
        renderItem={renderItem}
      />
    </ScrollView>
  );
};

export default Articles;
