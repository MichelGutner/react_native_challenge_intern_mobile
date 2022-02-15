import React from 'react';
import HTMLView from 'react-native-htmlview';
import { Container, Content, Title } from './styles';

const ArticleDetails = props => {
  const article = props.route.params.item;

  return (
    <Container>
      <Title>{article.title}</Title>
      <Content>{<HTMLView value={article.content} />}</Content>
    </Container>
  );
};

export default ArticleDetails;
