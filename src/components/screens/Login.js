import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

class Login extends Component {

    register() {
        // send credentials to server
        // if signup successful
        this.props.navigation.navigate('Tabs');
    }

    render(){
       return(
           <View style={{
            height: 100+"%",
            width: 100+"%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
           }}>
               <Button title="Login" onPress={() => this.register()}/>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                   <Text style={{ marginTop: 20 }}>New User?</Text>
               </TouchableOpacity>
           </View>
       )
    }
}

export default Login;