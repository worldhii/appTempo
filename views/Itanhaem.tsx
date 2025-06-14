import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Itanhaem(){

    const navigation = useNavigation();

    return(
        <View style={style.bloco}>
            <Text style={style.texto}>Previsão do tempo de Itanhaem</Text>

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
        fontSize:30,
        color:'#023535',
        textAlign:'center'
    },





})