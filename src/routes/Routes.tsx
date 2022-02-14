import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import { Themes } from '../../themes/themes';
import ArticleDetails from '../screens/ArticleDetails/ArticleDetails';
import Articles from '../screens/Articles/Articles';
import Onboarding from '../screens/Onboarding/Onboarding';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Articles"
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
      <Stack.Screen
        options={{
          title: 'Artigos',
          headerStyle: { backgroundColor: Themes.colors.backgroundSanar },
          headerTintColor: Themes.colors.white,
        }}
        name="Articles"
        component={Articles}
      />
      <Stack.Screen
        options={{
          title: 'Detalhes do Artigo',
          headerStyle: { backgroundColor: Themes.colors.backgroundSanar },
          headerTintColor: Themes.colors.white,
        }}
        name="ArticleDetails"
        component={ArticleDetails}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
