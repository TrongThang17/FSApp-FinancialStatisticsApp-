import {persistReducer} from 'redux-persist';
import {createReducer, getType} from 'typesafe-actions';

import {actions} from './AppActions';
import {storage} from '../_reduxPersist/persistConfig';

const stateKey = 'app';

export interface Alert {
  title?: string;
  content?: string;
  isVisible: boolean;
}

export interface AppState {
  initing: boolean;
  isLoading: boolean;
  alert: Alert;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: AppState = {
  initing: true,
  isLoading: false,
  alert: {isVisible: false, title: '', content: ''},
};

/* ------------- Reducers ------------- */

const startLoading = (state: AppState) => ({
  ...state,
  isLoading: true,
});

const stopLoading = (state: AppState) => ({
  ...state,
  isLoading: false,
});

const setAlert = (
  state: AppState,
  {payload: {title, content, isVisible}}: ReturnType<typeof actions.setAlert>,
) => ({
  ...state,
  alert: {
    title,
    content,
    isVisible,
  },
});

const setIniting = (
  state: AppState,
  {payload: {initing}}: ReturnType<typeof actions.setIniting>,
): AppState => ({
  ...state,
  initing,
});

/* ------------- Hookup Reducers To Types ------------- */
const reducer = createReducer(INITIAL_STATE, {
  [getType(actions.setIniting)]: setIniting,
  [getType(actions.startLoading)]: startLoading,
  [getType(actions.stopLoading)]: stopLoading,
  [getType(actions.setAlert)]: setAlert,
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
  getIsLoading: ({isLoading}: AppState) => isLoading,
  getAlert: ({alert}: AppState) => alert,
  getIniting: ({initing}: AppState) => initing,
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
