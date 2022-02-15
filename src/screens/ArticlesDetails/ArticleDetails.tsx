import React from 'react';
import { Text, View } from 'react-native';

type Props = {
  route: Parameters;
  params: Parameters;
};

const ArticlesDetails: React.FC<Props> = props => {
  const article = props.route.params.articles;
  return (
    <View>
      <Text>{article.title}</Text>
    </View>
  );
};

export default ArticlesDetails;
