import React, { Component } from 'react';
import { MainFeed, Login } from './components/screens';
// navigation imports
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

// switch navigator mainstack
const MainStack = createSwitchNavigator({
    Login: { screen: Login },
    Main: { screen: MainFeed }
});

export default createAppContainer(MainStack);