import React from 'react';
import { Text, View } from 'react-native';

const ArticleDetails = props => {
  const article = props.route.params.item;
  console.log('Michel');
  console.log(props.route.params);
  return (
    <View>
      <Text>{'Titulo: ' + article.title}</Text>
    </View>
  );
};

export default ArticleDetails;
