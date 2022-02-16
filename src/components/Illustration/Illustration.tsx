import React, { Component } from 'react';
import { ImageView } from './styles';

class Illustration extends Component {
  render() {
    return <ImageView source={require('./illustration.png')} />;
  }
}

export default Illustration;
