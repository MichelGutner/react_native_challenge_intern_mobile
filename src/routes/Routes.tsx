import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../screens/Onboarding/Onboarding';
import SignIn from '../screens/SignIn/SignIn';
import { Themes } from '../../themes/themes';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Onboarding"
        component={Onboarding}
      />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: Themes.colors.backgroundSanar },
          headerTintColor: Themes.colors.white,
        }}
        name="SignIn"
        component={SignIn}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
