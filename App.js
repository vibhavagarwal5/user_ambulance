import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Scene, Drawer, Router } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import MapScreen from './src/components/map';
import SignIn from './src/components/signin';
import SignUp from './src/components/signup';
import DrawerContent from './src/components/drawer';

import {drawerWidth} from './src/assets/drawer_styles';

import configureStore from './src/utils/store';
let { store, persistor } = configureStore();
const ConnectedRouter = connect()(Router);

export default class App extends Component {
	render() {
		console.log(store.getState().login);
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouter>
						<Scene key="root">
							<Scene
								key="signin"
								hideNavBar
								component={SignIn}
							/>
							<Scene
								key="signup"
								hideNavBar
								component={SignUp}
							/>
							<Scene
								drawer
								hideNavBar
								key="drawer"
								contentComponent={DrawerContent}
								drawerWidth={drawerWidth}
								drawerOpenRoute="DrawerOpen"
								drawerCloseRoute="DrawerClose"
								drawerToggleRoute="DrawerToggle"
							>
							<Scene
								key="map"
								hideNavBar
								component={MapScreen}
							/>
								<Scene
									key="signup"
									hideNavBar
									component={SignUp}
								/>
							</Scene> 
						</Scene>
					</ConnectedRouter>
				</PersistGate>
			</Provider>
		);
	}
}
