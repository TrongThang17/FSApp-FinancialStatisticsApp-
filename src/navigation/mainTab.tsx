import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, StyleSheet} from 'react-native';
import {HomeStack, VehicleStack, SettingStack, PaymentStack} from './stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
const Tab = createBottomTabNavigator();

export function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: styles.bottomBar,
        tabBarLabelStyle: {marginBottom: Platform.OS === 'ios' ? -10 : 10},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentStack}
        options={{
          tabBarLabel: 'Payment',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-cash"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Vehicle"
        component={VehicleStack}
        options={{
          tabBarLabel: 'Vehicle',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="motorbike"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingStack}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color, size}) => (
            <Feather name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    height: 64,
  },
});
