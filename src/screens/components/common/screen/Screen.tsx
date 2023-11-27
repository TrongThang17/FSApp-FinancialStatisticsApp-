import * as React from 'react';
import {
  Keyboard,
  RefreshControl,
  StatusBar,
  View,
  ViewStyle,
  // SafeAreaView,
} from 'react-native';
import {
  useSafeAreaInsets,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { isNonScrolling, presets, KeyboardOffsets, isNonScrollView } from './Screen.presets';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '@src/assets';

interface ScreenProps {
  /**
   * Children components.
   */
  children?: React.ReactNode;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle;

  /**
   * One of the different types of presets.
   */
  preset?: 'fixed' | 'scroll' | 'dismiss';
  /**
   * An optional background color
   */
  backgroundColor?: string;

  /**
   * An optional status bar setting. Defaults to light-content.
   */
  statusBar?: 'light-content' | 'dark-content';

  /**
   * By how much should we offset the keyboard? Defaults to none.
   */
  keyboardOffset?: KeyboardOffsets;

  onRefresh?: () => void;

  refreshing?: boolean;

  /**
   * Should we not wrap in isSafeConnectStatusBar? Defaults to false.
   */

  isSafeConnectStatusBar?: boolean;

  /**
   *
   */
  bgStatusBar?: string;

  keyboardShouldPersistTapsHandled?: boolean;
}

function ScreenWithoutScrolling(props: ScreenProps) {
  const insets = useSafeAreaInsets();
  const preset = presets.fixed;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor
    ? { backgroundColor: props.backgroundColor }
    : {};
  const insetStyle = {
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };
  const backgroundStatusBar = props?.bgStatusBar
    ? props.bgStatusBar
    : Colors.white;
  const keyboardShouldPersistTapsHandled =
    props.keyboardShouldPersistTapsHandled;
  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      keyboardShouldPersistTaps={
        keyboardShouldPersistTapsHandled ? 'handled' : 'never'
      }
      contentContainerStyle={[preset.outer, backgroundStyle]}>
      <SafeAreaView
        edges={['right', 'left', 'top']}
        style={{ backgroundColor: backgroundStatusBar }}>
        <StatusBar
          barStyle={props.statusBar || 'light-content'}
          backgroundColor={backgroundStatusBar}
        />
        <View style={[preset.inner, backgroundStyle, style, insetStyle]}>
          {props.children}
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

function ScreenWithScrolling(props: ScreenProps) {
  const insets = useSafeAreaInsets();
  const preset = presets.scroll;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor
    ? { backgroundColor: props.backgroundColor }
    : {};
  const insetStyle = {
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };
  const backgroundStatusBar = props?.bgStatusBar
    ? props.bgStatusBar
    : Colors.white;
  const { onRefresh, refreshing, statusBar } = props;

  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: Colors.whiteSmoke }}
      contentContainerStyle={[preset.inner, backgroundStyle]}
      //   scrollEnabled={Platform.OS === 'android'}
      refreshControl={
        onRefresh ? (
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        ) : null
      }
      extraScrollHeight={40}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView
        edges={['right', 'left', 'top']}
        style={{ backgroundColor: backgroundStatusBar }}
      />
      <StatusBar
        barStyle={statusBar || 'dark-content'}
        translucent={props.bgStatusBar === Colors.transparent}
        backgroundColor={backgroundStatusBar}
      />
      <View style={[preset.inner, backgroundStyle, style, insetStyle]}>
        {props.children}
      </View>
    </KeyboardAwareScrollView>
  );
}
function ScreenNonKeyBoard(props: ScreenProps) {
  const insets = useSafeAreaInsets();
  const preset = presets.fixed;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor
    ? { backgroundColor: props.backgroundColor }
    : {};
  const insetStyle = {
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };
  const backgroundStatusBar = props?.bgStatusBar
    ? props.bgStatusBar
    : Colors.white;
  return (
    <View>
      <SafeAreaView
        edges={['right', 'left', 'top']}
        style={{ backgroundColor: backgroundStatusBar }}>
        <StatusBar
          barStyle={props.statusBar || 'light-content'}
          backgroundColor={backgroundStatusBar}
        />
        <View style={[preset.inner, backgroundStyle, style, insetStyle]}>
          {props.children}
        </View>
      </SafeAreaView>
    </View>
  );
}
/**
 * The starting component on every screen in the app.
 *
 * @param props The screen props
 */
export function Screen(props: ScreenProps) {
  // React.useEffect(() => {
  //   const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
  //     Keyboard.dismiss();
  //   });
  //   return () => {
  //     hideSubscription.remove();
  //   };
  // }, []);

  if (isNonScrolling(props.preset)) {
    return <ScreenWithoutScrolling {...props} />;
  }
  if (isNonScrollView(props.preset)) {
    return <ScreenNonKeyBoard {...props} />;
  } else {
    return <ScreenWithScrolling {...props} />;
  }
}