import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './components/context/UserProvider';
import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import MainStack from './routes/Routes';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor="transparent"
          translucent
        />
        <MainStack />
      </UserProvider>
    </NavigationContainer>
  );
}

export default App;
