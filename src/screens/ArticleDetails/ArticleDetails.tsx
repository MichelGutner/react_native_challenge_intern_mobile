import React from 'react';
import { Text, View } from 'react-native';
import HTMLView from 'react-native-htmlview';

const ArticleDetails = props => {
  const article = props.route.params.item;
  console.log('Michel');
  console.log(props.route.params);
  return (
    <View>
      <Text>{'Titulo: ' + article.title}</Text>
      <HTMLView value={article.content} />
    </View>
  );
};

export default ArticleDetails;
