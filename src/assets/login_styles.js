import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//styling used in signin page.
export const styles = StyleSheet.create({
	container:{
        flex:1,
        paddingHorizontal:width * 0.15,
        paddingTop:height * 0.15
    },
    heading:{
        fontSize:20,
        marginBottom:height/17,
        fontWeight:'bold',
        textAlign:'center'
    },
    loginButton:{
        paddingTop:height/50,
    },
    loginText:{
        textAlign:'center',
        fontWeight:'500',
        fontSize:15
    }
});
