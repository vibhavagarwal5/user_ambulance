import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-native-router-flux';
import { Actions, Scene, Drawer } from 'react-native-router-flux';

import MapScreen from '../components/map';
import SignIn from '../components/signin';
import SignUp from '../components/signup';

const ConnectedRouter = connect()(Router);

import configureStore from '../utils/store';
let { store, persistor } = configureStore();

/**
 * Routing class containing all instances of screens.
 * @extends Component
 */
export default class Route extends Component {
	//Describes the functionality of the hardware back button
	onBackPress() {        
		if (Actions.currentScene === 'map') {
			return false;
		}
		Actions.pop();
		return true;
	}

	render() {
        var initial =true;
        if(store.getState().login.user !== null){
            initial = false
        }
		return (
			<ConnectedRouter backAndroidHandler={this.onBackPress}>
                <Scene key="root">
                    <Scene
                        key="signin"
                        hideNavBar
                        component={SignIn}
                        initial={initial}
                    />
                    <Scene
                        key="signup"
                        hideNavBar
                        component={SignUp}
                    />
                    <Scene
                        key="map"
                        hideNavBar
                        component={MapScreen}
                        initial={!initial}
                    />
                </Scene>
            </ConnectedRouter>
		);
	}
}
