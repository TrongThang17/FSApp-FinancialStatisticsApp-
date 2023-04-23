import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainTab} from './mainTab';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainTab"
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        name={'MainTab'}
        component={MainTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
