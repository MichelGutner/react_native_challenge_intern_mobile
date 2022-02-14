import React from 'react';
import { Linking } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { Container, Content, Title } from './styles';

const ArticleDetails = props => {
  const article = props.route.params.item;

  const Link = () => {
    Linking.openURL('https://www.healthcare.gov' + article.url);
  };

  console.log(article.url);
  return (
    <Container>
      <Title>{article.title}</Title>
      <Content>
        <HTMLView value={article.content} />
      </Content>
    </Container>
  );
};

// ", "date": "2021-03-19 00:00:00 +0000",
// "lang": "en",
// "layout": "basic",
// "tags": [],
// "title": "New, lower costs on Marketplace coverage",
// "url": "/more-savings/"}

export default ArticleDetails;
function node(node: any) {
  throw new Error('Function not implemented.');
}
