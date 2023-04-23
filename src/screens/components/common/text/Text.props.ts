import {TextProps as TextProperties, TextStyle} from 'react-native';
import {TxKeyPath} from '@src/localization/i18n';
import {TextPresets} from './Text.preset';
import React from 'react';

export interface TextProps extends TextProperties {
  /**
   * Children components.
   */
  children?: React.ReactNode;

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: TxKeyPath | string;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: TextStyle | TextStyle[];

  /**
   * One of the different types of text presets.
   */
  preset?: TextPresets;
}
