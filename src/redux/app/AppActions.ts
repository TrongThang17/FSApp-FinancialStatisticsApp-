import {createAction} from 'typesafe-actions';
import {createActionTypePrefixFormat} from '../common';

const typePrefixFormat = createActionTypePrefixFormat('App');

const startLoading = createAction(typePrefixFormat('startLoading'))();

const stopLoading = createAction(typePrefixFormat('stopLoading'))();

const setAlert = createAction(typePrefixFormat('setAlert'))<{
  isVisible: boolean;
  content?: string;
  title?: string;
}>();

const setIniting = createAction(typePrefixFormat('setIniting'))<{
  initing: boolean;
}>();

export const actions = {
  startLoading,
  stopLoading,
  setAlert,
  setIniting,
};
