import React, { Component } from 'react';
import {
	ActivityIndicator,
	Text,
	View,
	ScrollView,
	Image,
	TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import { styles } from '../assets/drawer_styles';

class DrawerContent extends Component {
	render() {
        return (
            <ScrollView style={styles.container}>
                <TouchableHighlight onPress={()=>{}}>
                    <Text style={styles.option}>Logout</Text>
                </TouchableHighlight>
            </ScrollView>
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

export default connect(null, null)(DrawerContent);
