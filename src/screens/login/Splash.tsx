import React from 'react';
import {Colors, FontSize, Images, Metrics} from '@src/assets';
import {Button, Screen} from '@src/screens/components/common';
import {View, Text} from 'react-native-ui-lib';
import {Image, ImageBackground, StyleSheet} from 'react-native';
const Splash = () => {
  return (
    <Screen
      preset="fixed"
      statusBar="dark-content"
      backgroundColor={Colors.white}
      bgStatusBar={Colors.white}>
      <View flex centerH centerV>
        <ImageBackground
          source={Images.background}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.viewTextLogo}>
            <Image source={Images.logo} style={styles.logo} />
            <Text style={styles.textUp}>FSA</Text>
            <Text style={styles.textDown}>Financial Statistics App</Text>
          </View>
          <View flex centerH centerV>
            <View flex>
              <Text style={styles.textUp}>Welcome to FSA</Text>
            </View>
            <View flex>
              <Button />
            </View>
          </View>
        </ImageBackground>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  viewTextLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textUp: {
    fontSize: FontSize.giant,
    color: Colors.redCinnabar,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  textDown: {
    fontSize: FontSize.small,
    color: Colors.greyPlatinum,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: Metrics.screen.height,
    width: Metrics.screen.width,
  },
  imageAfter: {
    flex: 1,
    justifyContent: 'center',
    height: Metrics.screen.height,
    width: Metrics.screen.width,
  },
  logo: {},
});
export default Splash;
