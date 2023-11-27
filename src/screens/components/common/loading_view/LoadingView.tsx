import * as React from 'react';
import {ActivityIndicator, View, ViewStyle} from 'react-native';
import {Colors} from '@src/assets';
import {useAppLoading} from '@src/hooks/app';

const CONTAINER: ViewStyle = {
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 99,
};

const WRAPPER: ViewStyle = {
  alignItems: 'stretch',
  bottom: 0,
  justifyContent: 'center',
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 9,
};

/**
 * Describe your component here
 */
export const LoadingView = () => {
  const {isLoading} = useAppLoading();

  if (!isLoading) {
    return null;
  }

  return (
    <View style={CONTAINER}>
      <View style={WRAPPER}>
        <ActivityIndicator animating color={Colors.greyLight} size="large" />
      </View>
    </View>
  );
};
