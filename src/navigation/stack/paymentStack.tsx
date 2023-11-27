import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PaymentScreen} from '../../screens';

const Stack = createNativeStackNavigator();

export const PaymentStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name={'payment'} component={PaymentScreen} />
    </Stack.Navigator>
  );
};
