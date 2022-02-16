import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

class SanarLogo extends Component {
  render() {
    return (
      <Image
        source={require('./LogosImage/logo-sanar.png')}
        style={styles.image}
      />
    );
  }
}

export default SanarLogo;

const styles = StyleSheet.create({
  image: {
      width: 152, 
      height: 45
  }
})
