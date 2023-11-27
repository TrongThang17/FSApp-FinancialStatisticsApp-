import {createAction} from 'typesafe-actions';
import {createActionTypePrefixFormat} from '../common';

const typePrefixFormat = createActionTypePrefixFormat('User');

const saveUser = createAction(typePrefixFormat('saveUser'))<{
  user: any;
}>();

const saveCurrentPermission = createAction(
  typePrefixFormat('saveCurrentPermission'),
)<{
  currentPermission: any;
}>();

const saveAllPermission = createAction(typePrefixFormat('saveAllPermission'))<{
  userPermissions: any;
}>();

const logout = createAction(typePrefixFormat('logout'))();

export const actions = {
  logout,
  saveAllPermission,
  saveCurrentPermission,
  saveUser,
};
