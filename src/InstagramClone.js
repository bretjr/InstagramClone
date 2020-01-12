import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MainFeed, Login } from './components/screens';
// navigation imports
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// stack navigation
const MainStack = createStackNavigator({
    Login: Login,
    Main: MainFeed
});

class InstagramClone extends Component {

    render() {
        return <MainStack />;
    }
}

export default createAppContainer(MainStack);