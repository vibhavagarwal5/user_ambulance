import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Scene, Drawer, Router } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Route from './src/utils/routes';

import configureStore from './src/utils/store';
let { store, persistor } = configureStore();

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Route/>
				</PersistGate>
			</Provider>
		);
	}
}
