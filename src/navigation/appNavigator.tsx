import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './appStack';
import {Alert, LoadingView} from '@src/screens/components/common';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack />
      <LoadingView />
      <Alert />
    </NavigationContainer>
  );
};
