import React, { Component } from 'react';
import { ImageView } from './styles';

class SanarProfileLogo extends Component {
  render() {
    return <ImageView source={require('./profile.png')} />;
  }
}

export default SanarProfileLogo;
