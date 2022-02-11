import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../screens/Onboarding/Onboarding';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
}