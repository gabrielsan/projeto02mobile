import React, { useEffect }from 'react';
import { BackHandler } from 'react-native';
import {  Buttom, Container , Text  } from '../styles/Container';
import { Style } from 'util';
import { View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { withTheme } from 'styled-components';
import { createStackNavigator } from '@react-navigation/stack';
//import { Map} from '../pages';
import {useNavigation} from '@react-navigation/native';
import Map from './Map';
import { NavigationContainer } from '@react-navigation/native';



export default function Details(){
    const navigation = useNavigation();
    function handleMap(){
      navigation.navigate("Map"); 
    }
  
    return(
       
        <>
        <View style={{backgroundColor:"white", height:50}}>
        <Text>Header falso</Text>
        <Image source={require('../../assets/sanchat2.png')} style={{marginVertical:-5, marginLeft:250}}/>
        </View>


         <TouchableOpacity onPress={handleMap} style={{backgroundColor:"#641DA3"}}> 
                 <Text style={{color:"white", marginLeft:140}}>Ver no Mapa</Text>
         </TouchableOpacity>
       

       
       <Buttom style={{ margin:7, marginRight:250, marginVertical:441, backgroundColor:"red", marginTop:458}} >
               <Text>Denunciar</Text>
            </Buttom>
            <Text></Text>
            <Buttom style={{ margin:7, marginRight:250, height:78, marginVertical:-35}}>
               <Text>Encerrar</Text>
            </Buttom>

          

            
            
            <View style={{marginVertical:-719, marginLeft:-55}}> 
            <SafeAreaView > 
        <TextInput 
        style={{   
        backgroundColor:"white",
        marginLeft:205, 
        marginVertical:563,
        borderColor:"purple", 
        margin:7,
        padding:58,
        width: 235,
        borderWidth:1,
        borderRadius:9,}}
        
       />
        </SafeAreaView>
       


     
        </View>
        
        
            
        </>
    )

}
