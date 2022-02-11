import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import SanarLogo from './components/SanarLogo/SanarLogo';
import { MainStack } from './routes/Routes';

const App = () => {

  return (
    <NavigationContainer>
        <MainStack />
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#338BFF',
    alignSelf: 'center',
  },
  highlight: {
    fontWeight: '900',
  },
  image: {
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingTop: 320,
  },
});

export default App;
