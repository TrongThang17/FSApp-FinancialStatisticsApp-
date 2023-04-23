import React, {ReactNode} from 'react';
import {ReducersMapObject, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import storage from '@react-native-async-storage/async-storage';

import * as reducers from './reducers';
import {StateType} from 'typesafe-actions';
import createStore from './createStore';
import {actions} from './user/UserActions';
import {getType} from 'typesafe-actions';
import {SettingRedux} from './reducers';
import R from 'ramda';

/* ------------- Reducers ------------- */
const allReducers = Object.values(reducers).reduce(
  (prev: ReducersMapObject, curr: Record<string, any>): ReducersMapObject => {
    return {
      ...prev,
      ...curr.reducerMap,
    };
  },
  {},
);

// const reducesArr = Object.entries(reducers).map(([name, obj]) => ({
//   name,
//   ...obj,
// }));

// const initialStates = R.pipe(
//   R.map(re => ({ [re.stateKey]: re.INITIAL_STATE })),
//   R.mergeAll,
// )(reducesArr);

const appReducer = combineReducers(allReducers);

const rootReducer = (state: ReturnType<typeof appReducer>, action: any) => {
  const copyOfObj = Object.assign({}, state);
  const initStateWithExcept = R.pickAll([`${SettingRedux.stateKey}`])(
    copyOfObj,
  );
  /* if you are using RTK, you can import your action and use it's type property instead of the literal definition of the action  */
  if (action.type === getType(actions.logout)) {
    // for all keys defined in your persistConfig(s)
    storage.removeItem('persist:root');
    storage.removeItem('persist:user');
    storage.getAllKeys().then(data => {
      console.log('All local storage keys:', data);
    });
    return appReducer(initStateWithExcept, action);
  }

  return appReducer(state, action);
};

export type RootState = StateType<typeof rootReducer>;

/* ------------- Create Store ------------- */
const {store, persistor} = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;

interface Props {
  children: ReactNode;
}

/* ------------- Create Provider ------------- */

export const ReduxProvider = ({children}: Props) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);
