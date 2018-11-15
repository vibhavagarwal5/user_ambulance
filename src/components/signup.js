import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {
    bindActionCreators
} from 'redux'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../assets/login_styles'

class SignUp extends Component {
    constructor(props) {
		super(props);
		this.state = {
            name:'',
            dob:'',
            phone:''
        };
    }

    handleSignUp(){
        Actions.map();
    }
    
	render() {
		return (
			<View style={styles.container}>
                    <Text style={styles.heading}>Create an account</Text>
                    <Text>Name</Text>
                    <TextInput
                        ref={input => (this.unameInput = input)}
                        onChangeText={email => this.setState({ email })}
                        onSubmitEditing={() => this.dobInput.focus()}
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        placeholder="Name"
                        underlineColorAndroid='black'
                    />
                    <Text>Date of Birth</Text>
                    <TextInput
                        ref={input => (this.dobInput = input)}
                        onChangeText={dob => this.setState({ dob })}
                        onSubmitEditing={() => this.phoneInput.focus()}
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        placeholder="Date of Birth (Optional)"
                        underlineColorAndroid='black'
                    />
                    <Text>Contact Number</Text>
                    <TextInput
                        ref={input => (this.phoneInput = input)}
                        onChangeText={phone => this.setState({ phone })}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType='number-pad'
                        returnKeyType="next"
                        placeholder="Contact Number"
                        underlineColorAndroid='black'
                    />
					<TouchableOpacity
                        onPress={() => this.handleSignUp()}
                        style={styles.loginButton}
					>
						<Text style={styles.loginText}> Register </Text>
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

export default connect(null, null)(SignUp);
