import { View, Text } from 'react-native';
import React, { useState } from 'react';

const ArticlesDetails = props => {
  const [article, setArticle] = useState(props.route.params.articles);
  console.log(props.route.params.articles);
  return (
    <View>
      <Text>ArticlesDetails</Text>
    </View>
  );
};

export default ArticlesDetails;
