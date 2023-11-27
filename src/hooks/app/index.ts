import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import R from 'ramda';

import {AppRedux} from '@src/redux/reducers';
import {actions} from '@src/redux/app/AppActions';
import {Alert} from '@src/redux/app/AppRedux';

export const useAppLoading = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(
    R.pipe(AppRedux.getReducerState, AppRedux.selectors.getIsLoading),
  );

  const onStartLoading = useCallback(
    () => dispatch(actions.startLoading()),
    [dispatch],
  );

  const onStopLoading = useCallback(
    () => dispatch(actions.stopLoading()),
    [dispatch],
  );

  return {isLoading, onStartLoading, onStopLoading};
};

export const useAppAlert = () => {
  const dispatch = useDispatch();
  const alert = useSelector(
    R.pipe(AppRedux.getReducerState, AppRedux.selectors.getAlert),
  );

  const onSetAlert = useCallback(
    (setAlert: Alert) => dispatch(actions.setAlert(setAlert)),
    [dispatch],
  );

  return {alert, onSetAlert};
};

export const useInitingApp = () => {
  const dispatch = useDispatch();

  const initing = useSelector(
    R.pipe(AppRedux.getReducerState, AppRedux.selectors.getIniting),
  );

  const resetState = useCallback(() => {
    dispatch(actions.stopLoading());
    dispatch(actions.setAlert({isVisible: false, title: '', content: ''}));
  }, [dispatch]);

  return {
    initing,
    resetState,
  };
};
