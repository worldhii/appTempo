import { View, Text, TouchableOpacity, StyleSheet} from "react-native";

import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home(){

    const navigation = useNavigation();

    return(
        <View style={style.bloco}>
            <Text style={style.texto}>Seja bem vindo!</Text>

            <TouchableOpacity onPress={()=>navigation.navigate('Itanhaem' as never)} style={style.btn}>

                 
                <Text style={style.textbtn}>Itanhaém</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    bloco:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#DEEFE7'
        
    },

    texto:{
        fontSize:50,
        color:'#023535'
    },

    btn:{
        backgroundColor:'#8FC1B5',
        width:'80%',
        padding:10,
        marginBottom:35,
        marginTop:35,
        borderRadius:15

    },

    textbtn:{
        fontSize:25,
        textAlign:'center',
        color: '#023535'
    }



})