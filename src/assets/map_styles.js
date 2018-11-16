import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//styling used in signin page.
export const styles = StyleSheet.create({
	container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    menu:{
        position:'absolute',
        top:height * 0.03,
        alignSelf:'flex-start',
        left:width * 0.05
    },
    bookContainer:{
        backgroundColor:'black',
        paddingVertical:height * 0.02,
        width:width/2,
        marginBottom:height/30,
        borderRadius:10,
    },
    bookText:{
        textAlign:'center',
        color:'white',
        fontSize:16
    }
});

