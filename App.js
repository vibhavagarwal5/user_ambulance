import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Scene, Drawer, Router } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import MapScreen from './src/components/map';
import SignIn from './src/components/signin';

import configureStore from './src/utils/store';
let { store, persistor } = configureStore();
const ConnectedRouter = connect()(Router);

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouter>
						<Scene key="root">
							<Scene
								key="signin"
								hideNavBar
								component={SignIn}
								initial
							/>
							<Scene
								key="map"
								hideNavBar
								component={MapScreen}
							/>
						</Scene>
					</ConnectedRouter>
				</PersistGate>
			</Provider>
		);
	}
}
