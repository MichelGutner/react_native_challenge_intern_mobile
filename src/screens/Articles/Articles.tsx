import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { Header } from 'react-native-elements';
import { Themes } from '../../../themes/themes';
import ArticlesItem from '../../components/ArticlesItem/ArticlesItem';
import SearchArticles from '../../components/SearchArticles/SearchArticles';
import { getArticles } from '../../services/healthCareApi';
import { Activity, ArticlesLenght, Container } from './styles';

const renderItem = ({ item }) => <ArticlesItem item={item} />;

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [searchArticles, setSearchArticles] = useState('');

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

  const articlesOrder = [...articles];
  articlesOrder.sort((ordenationPrev, OrdernationNext) =>
    ordenationPrev.date < OrdernationNext.date
      ? 1
      : OrdernationNext.date < ordenationPrev.date
      ? -1
      : 0
  );

  useEffect(() => {
    if (searchArticles === '') {
      getArticles(
        json => {
          setArticles(json.articles);
        },
        () => {
          Alert.alert('Algum erro aconteceu');
        }
      );
    } else {
      setArticles(
        articlesOrder.filter(item => {
          if (
            item.title.toLowerCase().indexOf(searchArticles.toLowerCase()) > -1
          ) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [searchArticles]);

  const articlesLength = articles.length;

  return (
    <Container>
      <Header
        statusBarProps={{
          barStyle: 'light-content',
          backgroundColor: Themes.colors.backgroundSanar,
          translucent: true,
        }}
        containerStyle={{
          backgroundColor: Themes.colors.backgroundSanar,
        }}
        placement="left"
        leftComponent={
          <ArticlesLenght>
            {articlesLength + ' Artigos encontrado'}
          </ArticlesLenght>
        }
        centerComponent={
          <SearchArticles
            value={searchArticles}
            onChangeText={(text: string) => setSearchArticles(text)}
          />
        }
        rightComponent={{
          icon: 'search',
          color: '#fff',
        }}
      />
      {articlesOrder.length !== 0 ? (
        <FlatList
          data={articlesOrder}
          keyExtractor={item => item.title.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Activity size="large" animating color={'blue'} />
      )}
    </Container>
  );
};

export default Articles;
