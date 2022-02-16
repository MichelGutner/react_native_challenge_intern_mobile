import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

class Illustration extends Component {
  render() {
    return (
      <Image
        source={require('./LogosImage/illustration.png')}
        style={styles.image}
      />
    );
  }
}

export default Illustration;

const styles = StyleSheet.create({
    image: {
        width: 360, 
        height: 202
    }
})
