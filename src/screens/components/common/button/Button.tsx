import React, {FC, memo} from 'react';
import {View, TouchableOpacity, Colors as ColorsUI} from 'react-native-ui-lib';
import {ViewStyle} from 'react-native';

import {Text} from '../text/Text';
import {ButtonPresets, presets} from './Button.preset';
import {flatten, mergeAll} from 'ramda';

interface ButtonProps {
  preset?: ButtonPresets | string;
  disabled?: boolean;
  buttonViewStyle?: ViewStyle;
  buttonContainerStyle?: ViewStyle;
  styleLabel?: any;
  label?: string;
  onPress?: () => void;
  noUsingFlex?: boolean;
  usingCustomLabel?: boolean;
  CustomLabelElement?: any;
}

const ButtonView: FC<ButtonProps> = ({
  preset = 'default',
  disabled,
  buttonViewStyle,
  buttonContainerStyle,
  styleLabel,
  label,
  onPress,
  noUsingFlex,
  usingCustomLabel,
  CustomLabelElement,
  ...res
}) => {
  const themeColor = ColorsUI.themeColor;
  const viewStyle = mergeAll(
    flatten([presets(themeColor)[preset].view || {}, buttonViewStyle || {}]),
  );

  const textStyle = mergeAll(
    flatten([presets(themeColor)[preset].text || {}, styleLabel || {}]),
  );

  return (
    <View row flex={!noUsingFlex} centerH {...res}>
      <TouchableOpacity
        row
        flex={!noUsingFlex}
        centerH
        style={buttonContainerStyle}
        disabled={disabled}
        onPress={onPress}>
        <View flex={!noUsingFlex} center paddingV-12 style={viewStyle}>
          {usingCustomLabel ? (
            <CustomLabelElement />
          ) : (
            <Text style={textStyle}>{label ?? ''}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const Button = ButtonView;
