import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

class SanarProfileLogo extends Component {
  render() {
    return (
      <Image
        source={require('./LogosImage/profile.png')}
        style={styles.image}
      />
    );
  }
}

export default SanarProfileLogo;

const styles = StyleSheet.create({
    image: {
        width: 94, 
        height: 94
    }
})