import React, {Component} from 'react';
import {MainFeed, Login, Profile, Camera, Register} from './components/screens';
// navigation imports
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

// bottom tab navigator
const TabStack = createBottomTabNavigator(
  {
    Main: {screen: MainFeed},
    Profile: {screen: Profile},
    Camera: {screen: Camera},
  },
  {
    initialRouteName: 'Main',
  },
);

// stack navigator
const StackNav = createStackNavigator(
  {
    Login: {screen: Login},
    Register: {screen: Register},
  },
  {
    initialRouteName: 'Login',
  },
);

// switch navigator
const SwitchStack = createSwitchNavigator(
  {
    Auth: {screen: StackNav},
    Tabs: {screen: TabStack},
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(SwitchStack);
