import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SettingScreen} from '../../screens';

const Stack = createNativeStackNavigator();

export const SettingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name={'setting'} component={SettingScreen} />
    </Stack.Navigator>
  );
};
