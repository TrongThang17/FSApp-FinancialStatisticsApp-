import {TextStyle, ViewStyle} from 'react-native';
import {Colors, FontSize} from '@src/assets';

export const presets = (themeColor: string) => {
  const VIEW_BASE: ViewStyle = {
    borderWidth: 1,
    borderColor: themeColor,
    backgroundColor: themeColor,
    borderRadius: 8,
    minHeight: 44,
  };
  const TEXT_BASE: TextStyle = {
    color: Colors.white,
    lineHeight: 20,
    fontSize: FontSize.medium,
  };

  const TEXT_THEME_COLOR = {
    ...TEXT_BASE,
    color: themeColor,
  };

  const opacityThemeColor = themeColor + '4D'; // opacity 30%
  const opacityThemeColor1 = themeColor + '26'; // opacity 15%
  const opacityThemeColor2 = themeColor + '66'; // opacity 40%

  return {
    default: {
      view: {...VIEW_BASE} as ViewStyle,
      text: {...TEXT_BASE} as TextStyle,
    },
    opacity: {
      view: {
        ...VIEW_BASE,
        borderWidth: 0,
        backgroundColor: opacityThemeColor,
      } as ViewStyle,
      text: {
        ...TEXT_THEME_COLOR,
      } as TextStyle,
    },
    opacity_1: {
      view: {
        ...VIEW_BASE,
        borderWidth: 0,
        backgroundColor: opacityThemeColor1,
      } as ViewStyle,
      text: {
        ...TEXT_THEME_COLOR,
      } as TextStyle,
    },
    outLine: {
      view: {
        ...VIEW_BASE,
        borderColor: Colors.whiteShade,
        backgroundColor: Colors.white,
      } as ViewStyle,
      text: {
        ...TEXT_BASE,
        color: Colors.greyNightRider,
      } as TextStyle,
    },
    white: {
      view: {
        ...VIEW_BASE,
        backgroundColor: Colors.white,
        borderColor: Colors.transparent,
      } as ViewStyle,
      text: {
        ...TEXT_THEME_COLOR,
      } as TextStyle,
    },
    disabled: {
      view: {
        ...VIEW_BASE,
        backgroundColor: Colors.GrayGlacier,
        borderColor: Colors.transparent,
      } as ViewStyle,
      text: {
        ...TEXT_BASE,
        color: Colors.greyPlatinum,
      } as TextStyle,
    },
    disabled_1: {
      view: {
        ...VIEW_BASE,
        backgroundColor: opacityThemeColor1,
        borderColor: Colors.transparent,
      } as ViewStyle,
      text: {
        ...TEXT_BASE,
        color: opacityThemeColor2,
      } as TextStyle,
    },
  };
};

/**
 * A list of preset names.
 */
export type ButtonPresets = keyof typeof presets;
