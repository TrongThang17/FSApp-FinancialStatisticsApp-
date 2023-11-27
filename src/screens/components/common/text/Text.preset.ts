import {TextStyle} from 'react-native';
import {Colors, FontSize} from '@src/assets';

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  // fontFamily: typography.primary,
  color: Colors.greyNightRider,
  fontSize: FontSize.medium,
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  default: BASE,
  body1: {...BASE} as TextStyle,
  h1: {
    ...BASE,
    fontSize: FontSize.giant,
    fontWeight: '500',
  } as TextStyle,
  h2: {
    ...BASE,
    fontSize: FontSize.giant,
  } as TextStyle,
  h3: {
    ...BASE,
    fontSize: FontSize.bigger,
    fontWeight: '700',
  } as TextStyle,
  h4: {
    ...BASE,
    fontSize: FontSize.bigger,
  } as TextStyle,
  error: {
    ...BASE,
    fontSize: FontSize.small,
    color: Colors.redAlizarin,
  } as TextStyle,
  required: {
    ...BASE,
    fontSize: FontSize.small,
    color: Colors.redOrange,
  } as TextStyle,
  icon: {
    ...BASE,
    fontSize: FontSize.verySmall,
    color: Colors.white,
    fontWeight: '500',
    lineHeight: 12,
  },
  tab_bar: {
    ...BASE,
    fontWeight: '500',
  },
  tab_bar_switch: {
    ...BASE,
    fontSize: FontSize.small,
    fontWeight: '700',
  },
  greyPlatinum: {
    ...BASE,
    color: Colors.greyPlatinum,
    marginRight: 8,
  },
  sub_title: {
    ...BASE,
    fontWeight: '700',
  },
  tag: {
    ...BASE,
    fontSize: FontSize.small,
    fontWeight: '500',
    lineHeight: 16,
    color: Colors.greyNightRider,
  },
};

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets;
