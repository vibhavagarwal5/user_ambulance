import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//styling used in signin page.
export const styles = StyleSheet.create({
	container: {
        ...StyleSheet.absoluteFillObject,
        height: null,
        width: null,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
});

