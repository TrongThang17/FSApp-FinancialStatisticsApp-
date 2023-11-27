import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, LoginScreen} from '../../screens';

const Stack = createNativeStackNavigator();

export const LoginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SPLASH"
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name={'SPLASH'} component={SplashScreen} />
      <Stack.Screen name={'LOGIN'} component={LoginScreen} />
    </Stack.Navigator>
  );
};
