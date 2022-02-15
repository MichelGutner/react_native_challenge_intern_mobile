import React from 'react';
import HTMLView from 'react-native-htmlview';
import { Container, Content, Title } from './styles';

interface Type {
  route: Parameters;
  params: Parameters;
}

const ArticleDetails: React.FC<Type> = props => {
  const article = props.route.params.item;

  return (
    <Container>
      <Title>{article.title}</Title>
      <Content>
        <HTMLView value={article.content} />
      </Content>
    </Container>
  );
};

export default ArticleDetails;
