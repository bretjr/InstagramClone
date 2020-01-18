import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';
import config from '../../config';

class Login extends Component {
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
  login() {
    let credentials = this.state.credentials;
    credentials.email = this.state.credentials.email.toLowerCase();
    console.log(JSON.stringify(credentials));
    fetch(config.baseUrl + 'login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(JSON.stringify(jsonResponse));
        if (jsonResponse.confirmation === 'success') {
          this.props.navigation.navigate('Tabs');
        } else {
          throw new Error(jsonResponse.message);
        }
      })
      .catch(err => {
        alert(err.message);
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
        <Text style={{fontSize: 16}}> Login </Text>
        <TextInput
          autoCapitalize="none"
          value={this.state.login}
          onChangeText={text => this.updateText(text, 'email')}
          placeholder="Email"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          autoCapitalize="none"
          value={this.state.password}
          onChangeText={text => this.updateText(text, 'password')}
          placeholder="Password"
          autoCorrect={false}
          style={styles.input}
          secureTextEntry
        />
        <Button title="Login" onPress={() => this.login()} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register')}
          style={{margin: 15, justifyContent: 'center', alignItems: 'center'}}>
          <Text>New User?</Text>
          <Text>Create A New Account</Text>
        </TouchableOpacity>
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
export default Login;
