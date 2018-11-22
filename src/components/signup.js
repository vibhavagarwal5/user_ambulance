import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {
    bindActionCreators
} from 'redux'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../assets/login_styles'
import Icon from 'react-native-vector-icons/Ionicons';
import {signup} from '../actions/loginAction';
import DatePicker from 'react-native-datepicker'

class SignUp extends Component {
    constructor(props) {
		super(props);
		this.state = {
            name:'',
            dob:'',
            contact_number:''
        };
    }

    handleSignUp(){
        this.props.signup(this.state).then(()=>{
            Actions.signin()
        })
    }
    
    today(){
        var today = new Date();
        date=today.getFullYear() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getDate();
        return date
    }

	render() {
		return (
			<View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>{ Actions.pop()}}
                    style={styles.backButton}
                >
                    <Icon
                        name="md-arrow-back"
                        size={30}
                    />
                </TouchableOpacity>
                <Text style={styles.heading}>Create an account</Text>
                <Text>Username</Text>
                <TextInput
                    ref={input => (this.usernameInput = input)}
                    onChangeText={name => this.setState({ name })}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    placeholder="Username"
                    underlineColorAndroid='black'
                />
                <Text style={styles.inputfieldText}>Date of Birth</Text>
                {/* <TextInput
                    ref={input => (this.dobInput = input)}
                    onChangeText={dob => this.setState({ dob })}
                    onSubmitEditing={() => this.phoneInput.focus()}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    placeholder="Date of Birth (Optional)"
                    underlineColorAndroid='black'
                /> */}
                <DatePicker
                    style={styles.dateInput}
                    mode="date"
                    androidMode='spinner'
                    placeholder={
                        this.state.dob===''
                        ? "Select your Date of Birth"
                        : this.state.dob
                    }
                    format="YYYY-MM-DD"
                    minDate={'1900/01/01'}
                    maxDate={this.today()}
                    showIcon={false}
                    customStyles={{
                        dateInput: {
                        borderRadius:10,
                        borderWidth:1.4
                        },
                        placeholderText:{
                        fontWeight:'400',
                        fontSize:15,
                        color:'#4c4e51'
                        }
                    }}
                    onDateChange={(dob) => {this.setState({dob})}}
                />
                <Text style={styles.inputfieldText}>Contact Number</Text>
                <TextInput
                    ref={input => (this.phoneInput = input)}
                    onChangeText={contact_number => this.setState({ contact_number })}
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
            signup: signup
        },
        dispatch
    );
}

// const mapStateToProps = state => ({
//     user : state.login.user
// });

export default connect(null, matchDispatchToProps)(SignUp);
