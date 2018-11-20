import React, { Component } from 'react';
import {
	Text,
	View,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { styles } from '../assets/login_styles';
import Icon from 'react-native-vector-icons/Ionicons';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
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
                    <Text style={styles.heading}>Update Profile</Text>
                    <Text>Name</Text>
                    <TextInput
                        ref={input => (this.unameInput = input)}
                        onChangeText={email => this.setState({ email })}
                        onSubmitEditing={() => this.phoneInput.focus()}
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        placeholder="Name"
                        underlineColorAndroid='black'
                    />
                    <Text style={styles.inputfieldText}>Contact Number</Text>
                    <TextInput
                        ref={input => (this.phoneInput = input)}
                        onChangeText={phone => this.setState({ phone })}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType='number-pad'
                        returnKeyType="next"
                        placeholder="Contact Number"
                        underlineColorAndroid='black'
                        onFocus={()=>{
                        Alert.alert(
                            '',
                            'Changing this will change your login details also!',
                            [
                                {text: 'OK', onPress: () => {}},
                            ]
                            )
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => {}}
                        style={styles.loginButton}
                    >
                        <Text style={styles.loginText}> Update </Text>
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

export default connect(null, null)(Profile);
