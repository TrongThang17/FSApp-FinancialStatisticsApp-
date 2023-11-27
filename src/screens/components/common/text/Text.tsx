import * as React from 'react';
import {Text as ReactNativeText} from 'react-native';
import {mergeAll, flatten} from 'ramda';

import {presets} from './Text.preset';
import {translate} from '@src/localization/translate';
import {TextProps} from './Text.props';

export function Text(props: TextProps) {
  // grab the props
  const {
    preset = 'default',
    text,
    children,
    style: styleOverride,
    ...rest
  } = props;

  // figure out which content to use
  const i18nText = text && translate(text);
  const content = i18nText || children;

  const style = mergeAll(flatten([presets[preset] || {}, styleOverride || {}]));

  return (
    <ReactNativeText style={style} {...rest}>
      {content}
    </ReactNativeText>
  );
}
