import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

export default class Register extends Component {

	constructor() {
		super();
		this.state = {
			credentials: {
				login: "",
				password: ""
			}
		};
	}

	updateText(text, field) {
		let newCredentials = Object.assign(this.state.credentials);
		newCredentials[field] = text;
		this.setState({
			credentials: newCredentials
		});
	}

	register() {
		alert(JSON.stringify(this.state.credentials));
	}

  render() {
    return (
      <View style={{
        height: 100+"%",
        width: 100+"%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
       }}>
        <Text style={{ fontSize: 16 }}> Create New Profile </Text>
		  <TextInput
		  	value={this.state.login} 
			onChangeText={text => this.updateText(text, 'login')}
			placeholder="Username"
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
        <Button title="SignUp" 
		  	onPress={() => this.register()}
		  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    input: {
        flex: -1,
        width: 50+"%",
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5
    },
});
