import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import R from 'ramda';

import {UserRedux} from '@src/redux/reducers';
import {actions} from '@src/redux/user/UserActions';
import {UserThunk} from '@src/redux/thunks';
import {AppThunkDispatch} from '@src/redux/common';

export const useUserLogin = () => {
  const dispatch = useDispatch<AppThunkDispatch>();

  const user = useSelector(
    R.pipe(UserRedux.getReducerState, UserRedux.selectors.getUserData),
  );

  const currentPermission = useSelector(
    R.pipe(UserRedux.getReducerState, UserRedux.selectors.getCurrentPermission),
  );

  const userPermissions = useSelector(
    R.pipe(UserRedux.getReducerState, UserRedux.selectors.getUserPermissions),
  );

  const onLogout = React.useCallback(() => {
    dispatch(actions.logout());
  }, [dispatch]);

  return {
    onLogout,
    user,
    currentPermission,
    userPermissions,
  };
};

export const useUserPermission = () => {
  const dispatch = useDispatch<AppThunkDispatch>();

  const onGetUserPermission = React.useCallback(() => {
    dispatch(UserThunk.getAllPermission());
  }, [dispatch]);

  const user = useSelector(
    R.pipe(UserRedux.getReducerState, UserRedux.selectors.getUserData),
  );
  const userPermissions = useSelector(
    R.pipe(UserRedux.getReducerState, UserRedux.selectors.getUserPermissions),
  );

  const getCurrentPermission = ({menu}: {menu: string}) => {
    if (!menu && !userPermissions?.length) {
      return [];
    }
    if (user?.user?.role === 'admin' || user?.user?.role === 'root_admin') {
      // with admin and root_admin role
      return ['create', 'export', 'view', 'update', 'delete'];
    }
    const permissFiltered = userPermissions.filter(per => per.includes(screen));
    return permissFiltered.map(str => str.split('_').pop());
  };

  return {
    onGetUserPermission,
    getCurrentPermission,
  };
};
