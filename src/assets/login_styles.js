import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//styling used in signin page.
export const styles = StyleSheet.create({
	container:{
        flex:1,
        paddingHorizontal:width * 0.15,
        paddingTop:height * 0.15
    },
    backButton:{
        position:'absolute',
        top:height/20,
        left:width/20
    },
    heading:{
        fontSize:20,
        marginBottom:height/17,
        fontWeight:'bold',
        textAlign:'center'
    },
    inputfieldText:{
        paddingTop:height/50
    },
    loginButton:{
        paddingTop:height/50,
    },
    loginText:{
        textAlign:'center',
        fontWeight:'500',
        fontSize:15
    },
    register:{
        paddingTop:height/50,
        flexDirection:'row',
        alignSelf:'center'
    },
    registerText:{
        fontSize:15
    }
});
