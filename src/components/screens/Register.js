import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import config from '../../config';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        email: '',
        password: '',
      },
    };
  }
  updateText(text, field) {
    let newCredentials = Object.assign(this.state.credentials);
    newCredentials[field] = text;
    this.setState({
      credentials: newCredentials,
    });
  }
  register() {
    fetch(config.baseUrl + 'signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.credentials),
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.confirmation === 'success') {
          this.props.navigation.navigate('Tabs');
        } else {
          throw new Error({
            message: 'Sorry something went wrong; Please try again',
          });
        }
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      });
  }
  render() {
    return (
      <View
        style={{
          height: 100 + '%',
          width: 100 + '%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16}}> Create New Profile </Text>
        <TextInput
          value={this.state.login}
          onChangeText={text => this.updateText(text, 'email')}
          placeholder="Email"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={text => this.updateText(text, 'password')}
          placeholder="Password"
          autoCorrect={false}
          style={styles.input}
          secureTextEntry
        />
        <Button title="SignUp" onPress={() => this.register()} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    flex: -1,
    width: 50 + '%',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
  },
});
