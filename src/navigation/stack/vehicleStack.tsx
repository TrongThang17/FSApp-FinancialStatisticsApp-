import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {VehicleScreen} from '../../screens';

const Stack = createNativeStackNavigator();

export const VehicleStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name={'vehicle'} component={VehicleScreen} />
    </Stack.Navigator>
  );
};
