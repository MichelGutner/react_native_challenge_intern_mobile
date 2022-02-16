import React, { Component } from 'react';
import { ImageView } from './styles';

class SanarLogo extends Component {
  render() {
    return <ImageView source={require('./logo-sanar.png')} />;
  }
}

export default SanarLogo;
