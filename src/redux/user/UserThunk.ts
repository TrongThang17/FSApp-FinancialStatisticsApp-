import {AppThunk} from '../common';
import {AuthServices, UserServices} from '../../infra';
import {actions} from './UserActions';
import {actions as appActions} from '../app/AppActions';

export const postLogin =
  (payload: any): AppThunk =>
  async (dispatch, _appState) => {
    try {
      dispatch(appActions.startLoading());
      const response = await AuthServices.postLogin(payload);
      dispatch(actions.saveUser({user: response?.data}));
      return response?.data;
    } catch (e) {
      throw e;
    } finally {
      dispatch(appActions.stopLoading());
    }
  };

export const postTwoAuth =
  (payload: any): AppThunk =>
  async (dispatch, _appState) => {
    try {
      dispatch(appActions.startLoading());
      const response = await AuthServices.postTwoAuth(payload);
      dispatch(actions.saveUser({user: response?.data}));
      return response?.data;
    } catch (e) {
      throw e;
    } finally {
      dispatch(appActions.stopLoading());
    }
  };

export const postSendSMS =
  (payload: any): AppThunk =>
  async (dispatch, _appState) => {
    try {
      dispatch(appActions.startLoading());
      const response = await AuthServices.postSendSMS(payload);
      return response?.data;
    } catch (e) {
      throw e;
    } finally {
      dispatch(appActions.stopLoading());
    }
  };

export const postResetPassword =
  (payload: any): AppThunk =>
  async (dispatch, _appState) => {
    try {
      dispatch(appActions.startLoading());
      const response = await AuthServices.postResetPassword(payload);
      return response;
    } catch (e) {
      throw e;
    } finally {
      dispatch(appActions.stopLoading());
    }
  };

export const postCurrentPermission =
  (payload: any): AppThunk =>
  async (dispatch, _appState) => {
    try {
      const response = await UserServices.postCurrentPermission(payload);
      dispatch(
        actions.saveCurrentPermission({currentPermission: response?.data}),
      );
      return response;
    } catch (e) {
      throw e;
    }
  };

export const getAllPermission = (): AppThunk => async (dispatch, _appState) => {
  try {
    const response = await UserServices.getAllPermission();
    dispatch(
      actions.saveAllPermission({userPermissions: response?.data ?? []}),
    );
    return response;
  } catch (e) {
    throw e;
  }
};
