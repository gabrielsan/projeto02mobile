
import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Buttom, Container , Text  } from '../styles/Container';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { View, Image } from 'react-native';
import { ImageBackground } from 'react-native';
import Home from './Home';


const imgbg1='../../assets/fundo2.jpg'

export default function Login(){

    const navigation = useNavigation();
      return(

              <Container>


            <View>   
               <ImageBackground 
               source={require('../../assets/fundo2.jpg')}
               style={{flex:1, alignItems:'center', marginRight:70, marginLeft:70, justifyContent:"center", width:500}} 
               >
                

     

            
                           
               <Image source={require('../../assets/logo.jpg')} style={{marginBottom:100, marginVertical:70, marginRight:5}} />
         

        <SafeAreaView> 
        <TextInput
        style={{   
        backgroundColor:"white",   
        borderColor:"purple", 
        margin:10,
        padding:10,
        width: 300,
        borderWidth:1,
        borderRadius:9,}}
        
       
         placeholder="Nome de usuario ou Email" />
      </SafeAreaView>


      <SafeAreaView> 
        <TextInput 
        style={{    
        backgroundColor:"white",  
        borderColor:"purple", 
        margin:10,
        padding:10,
        width: 300,
        borderWidth:1,
        borderRadius:9,}}
        



        
        placeholder="Senha"
       />
        </SafeAreaView>


            <Buttom>
               <Text>Entrar</Text>
               
            </Buttom>
            
            </ImageBackground>
            </View>
            
      </Container>
 

       )
    }

    