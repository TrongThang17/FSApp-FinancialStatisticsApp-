import {persistReducer} from 'redux-persist';
import {createReducer, getType} from 'typesafe-actions';

import {actions} from './UserActions';
import {storage} from '../_reduxPersist/persistConfig';

const stateKey = 'user';

export interface Alert {
  title?: string;
  content?: string;
  isVisible: boolean;
}

export interface AppState {
  user: any;
  currentPermission: [string] | [];
  userPermissions: [string] | [];
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: AppState = {
  user: null,
  currentPermission: [],
  userPermissions: [],
};

/* ------------- Reducers ------------- */

const saveUser = (
  state: AppState,
  {payload: {user}}: ReturnType<typeof actions.saveUser>,
) => ({
  ...state,
  user: user,
});

const saveCurrentPermission = (
  state: AppState,
  {
    payload: {currentPermission},
  }: ReturnType<typeof actions.saveCurrentPermission>,
) => ({
  ...state,
  currentPermission: currentPermission,
});

const saveAllPermission = (
  state: AppState,
  {payload: {userPermissions}}: ReturnType<typeof actions.saveAllPermission>,
) => ({
  ...state,
  userPermissions: userPermissions,
});

/* ------------- Hookup Reducers To Types ------------- */
const reducer = createReducer(INITIAL_STATE, {
  [getType(actions.saveUser)]: saveUser,
  [getType(actions.saveCurrentPermission)]: saveCurrentPermission,
  [getType(actions.saveAllPermission)]: saveAllPermission,
});

const persistConfig = {
  key: stateKey,
  storage,
};

const reducerMap = {
  [stateKey]: persistReducer(persistConfig, reducer),
};

/* ------------- Selectors ------------- */
const getReducerState = (state: any): AppState => state[stateKey];
const selectors = {
  getUserData: ({user}: AppState) => user,
  getAccessToken: ({user}: AppState) => user?.access_token,
  getCurrentPermission: ({currentPermission}: AppState) => currentPermission,
  getUserPermissions: ({userPermissions}: AppState) => userPermissions,
};

/* ------------- Export ------------- */
export default {
  selectors,
  // default export
  INITIAL_STATE,
  stateKey,
  getReducerState,
  reducerMap,
};
