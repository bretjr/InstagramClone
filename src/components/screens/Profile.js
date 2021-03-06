import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Profile extends Component {
  login() {
    //Navigate to the main page
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
      <TouchableOpacity
        style={{
          height: 100 + '%',
          width: 100 + '%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => this.login()}>
        <Text>PROFILE PAGE</Text>
      </TouchableOpacity>
    );
  }
}

export default Profile;
