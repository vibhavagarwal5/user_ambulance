import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const drawerWidth = width * 0.5;

//Styling for the side drawer
export const styles = StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor: '#1e1e1e',
        paddingTop:height/10
	},
	option: {
		color: 'white',
		fontSize: 15,
		margin: width / 50,
		marginLeft:width/15
	}
});
