import React, { Component } from 'react';
import { MainFeed, Login, Profile, Camera } from './components/screens';
// navigation imports
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// bottom tab navigator
const TabStack = createBottomTabNavigator({
    Main: { screen: MainFeed },
    Profile: { screen: Profile },
    Camera: { screen: Camera }
},{
    initialRouteName: 'Main'
});

// switch navigator
const SwitchStack = createSwitchNavigator({
    Login: { screen: Login },
    Tabs: { screen: TabStack }
},{
    initialRouteName: 'Login'
});

export default createAppContainer(SwitchStack);