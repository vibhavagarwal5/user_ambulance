import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//styling used in signin page.
export const styles = StyleSheet.create({
	container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    menu:{
        position:'absolute',
        top:height * 0.04,
        alignSelf:'flex-start',
        right:width * 0.05
    },
    bookContainer:{
        backgroundColor:'black',
        paddingVertical:height * 0.02,
        width:width/2,
        marginBottom:height/30,
        borderRadius:10,
        elevation:7,
        alignSelf: 'center'
    },
    bookText:{
        textAlign:'center',
        color:'white',
        fontSize:16
    },
    ambulanceDetails:{
        backgroundColor:'white',
        paddingVertical:height/60,
        borderRadius:10,
        marginHorizontal:width/30,
        marginBottom:height/50,
        elevation:10,
        alignItems:'center'
    },
    ambulanceNo:{
        marginBottom:height/100
    }
});

