import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

class SanarLogoNegativo extends Component {
  render() {
    return (
      <Image
        source={require('./LogosImage/Logo-negativo.png')}
        style={styles.image}
      />
    );
  }
}

export default SanarLogoNegativo;

const styles = StyleSheet.create({
    image: {
        width: 152, 
        height: 45
    }
})
