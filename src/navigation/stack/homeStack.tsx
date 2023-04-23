import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../screens';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name={'home'} component={HomeScreen} />
    </Stack.Navigator>
  );
};
