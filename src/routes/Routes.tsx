import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Onboarding from '../screens/Onboarding/Onboarding';
import SignIn from '../screens/SignIn/SignIn';
import { Themes } from '../../themes/themes';
import SignUp from '../screens/SignUp/SignUp';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
      }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Onboarding"
        component={Onboarding}
      />
      <Stack.Screen
        options={{
          title: 'Login',
          headerStyle: { backgroundColor: Themes.colors.backgroundSanar },
          headerTintColor: Themes.colors.white,
        }}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        options={{
          title: 'Cadastro',
          headerStyle: { backgroundColor: Themes.colors.backgroundSanar },
          headerTintColor: Themes.colors.white,
        }}
        name="SignUp"
        component={SignUp}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
