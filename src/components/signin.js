import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {
    bindActionCreators
} from 'redux'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../assets/login_styles'

class SignIn extends Component {
    constructor(props) {
		super(props);
		this.state = {
            username:'',
            password:''
        };
    }

    handleSignIn(){
        Actions.map();
    }
    
	render() {
		return (
			<View style={styles.container}>
                    <Text style={styles.heading}>Ambulance Services</Text>
                    <Text>Username</Text>
                    <TextInput
                        ref={input => (this.usernameInput = input)}
                        onChangeText={email => this.setState({ email })}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        placeholder="Username"
                        underlineColorAndroid='black'
                    />
                    <Text>Password</Text>
                    <TextInput
                        ref={input => (this.passwordInput = input)}
                        onChangeText={password => this.setState({ password })}
                        autoCapitalize="none"
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        secureTextEntry={true}
                        placeholder="Password"
                        underlineColorAndroid='black'
                    />
					<TouchableOpacity
                        onPress={() => this.handleSignIn()}
                        style={styles.loginButton}
					>
						<Text style={styles.loginText}> Login </Text>
					</TouchableOpacity>
				</View>
		);
	}
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
        },
        dispatch
    );
}

const mapStateToProps = state => ({
});

export default connect(null, null)(SignIn);
