import * as React from 'react';
import {AppNavigator} from '@src/navigation/appNavigator';
import {ReduxProvider} from './src/redux';

const App = () => {
  return (
    <ReduxProvider>
      <AppNavigator />
    </ReduxProvider>
  );
};

export default App;
