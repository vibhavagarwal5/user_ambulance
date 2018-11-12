import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const origin = {
	latitude: 37.3318456,
	longitude: -122.0296002
};
const destination = {
	latitude: 37.787514,
	longitude: -122.427175

};
const GOOGLE_MAPS_APIKEY = 'AIzaSyAwv6K_MaZEA7nozTxCU-wTWAn2H8Ct5oo';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
					region={{
						latitude: 37.78825,
						longitude: -122.4324,
						latitudeDelta: 0.015,
						longitudeDelta: 0.0121,
					}}
				>
					<MapViewDirections
						origin={origin}
						destination={destination}
						apikey={GOOGLE_MAPS_APIKEY}
					/>
				</MapView>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		height: null,
		width: null,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
});
