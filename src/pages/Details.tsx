import React from 'react';
import { BackHandler } from 'react-native';
import {  Buttom, Container , Text  } from '../styles/Container';
import { Style } from 'util';
import { View, Image } from 'react-native';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { withTheme } from 'styled-components';



export default function Details(){
    return(
       
        <>
        <View style={{backgroundColor:"white", height:50}}>
        <Text>Header falso</Text>
        <Image source={require('../../assets/sanchat2.png')} style={{marginVertical:-5, marginLeft:250}}/>
        </View>
  
   <Buttom style={{ margin:7, marginBottom:-3,  marginRight:250, marginVertical:480, backgroundColor:"red"}} >
               <Text>Denunciar</Text>
            </Buttom>
            <Buttom style={{ margin:7, marginRight:250, height:78}}>
               <Text>Encerrar</Text>
            </Buttom>
            
            
            <View style={{marginVertical:-720, marginLeft:-55}}> 
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
