import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import MainStack from './routes/Routes';

function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default App;
