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

const Stack = createStackNavigator();


export default function Sobre(){

  
    return(
       
        <>
        <View style={{backgroundColor:"#641DA3", height:49}}>
        <Text/> 
        <Image source={require('../../assets/sanchat2.png')} style={{marginVertical:-5, marginLeft:250}}/>
        </View>
    
          

        <View  style={{backgroundColor:"white", height:800, flexDirection:"row"}}>
            <Image source={require('../../assets/Aleatorio.png')} style={{marginLeft:20, marginTop:50}}/>
            <Text style={{color:"#641DA3", marginTop:40, marginLeft:8}}>Aleatório:</Text>
            <Text style={{color:"black", marginTop:61, marginStart:-83, fontSize:15}}>Quando você clica no botão, escolhemos</Text>
            <Text style={{color:"black", marginTop:76, marginStart:-276, fontSize:15}}>uma pessoa nova e aleatória para falar</Text>
            <Text style={{color:"black", marginTop:90, marginStart:-263, fontSize:15}}>com você.</Text>


            <Image source={require('../../assets/Voltadoolho.png')} style={{marginLeft:-147, marginTop:150}}/>
            <Image source={require('../../assets/cornea.png')} style={{marginLeft:-43, marginTop:159}}/>
            <Text style={{color:"#641DA3", marginTop:150, marginLeft:30}}>Não é anônimo:</Text>
            <Text style={{color:"black", marginTop:173, marginStart:-140, fontSize:15}}>Você precisa fornecer informações,</Text>
            <Text style={{color:"black", marginTop:189, marginStart:-245, fontSize:15}}> Somente você e seu parceiro enxergam</Text>
            <Text style={{color:"black", marginTop:205, marginStart:-269, fontSize:15}}> a conversa entre vocês.</Text>

            <Image source={require('../../assets/Vector.png')} style={{marginLeft:-235, marginTop:250}}/>
            <Text style={{color:"#641DA3", marginTop:255, marginLeft:13}}>Simples:</Text>
            <Text style={{color:"black", marginTop:277, marginStart:-75, fontSize:15}}>Fale sobre o que quiser, quando cansar</Text>
            <Text style={{color:"black", marginTop:293, marginStart:-265, fontSize:15}}>aperte o botão "Encerrar" para ir para a </Text>
            <Text style={{color:"black", marginTop:309, marginStart:-265, fontSize:15}}>próxima pessoa.</Text>
   
           
            <Text style={{color:"black", marginTop:400, marginStart:-200, fontSize:15}}>Tenha em mente que o SANCHAT não controla de forma</Text>
            <Text style={{color:"black", marginTop:415, marginStart:-370, fontSize:15}}>alguma o que os usuários dizem durante o bate papo.</Text>
            <Text style={{color:"black", marginTop:430, marginStart:-362, fontSize:15}}>Desconecte-se sempre que se sentir desconfortável,</Text>
            <Text style={{color:"black", marginTop:445, marginStart:-357, fontSize:15}}>denuncie se for grave, iremos analisar sua denuncia e</Text>
            <Text style={{color:"black", marginTop:460, marginStart:-250, fontSize:15}}>e banir o agressor.</Text>
            <Text style={{color:"black", marginTop:475, marginStart:-240, fontSize:15}}>Se você é menor de idade, só utilize o SANCHAT com o</Text>
            <Text style={{color:"black", marginTop:490, marginStart:-340, fontSize:15}}>consentimento de seus pais ou responsáveis.</Text>
            <Text style={{color:"black", marginTop:505, marginStart:-347, fontSize:15}}>Tenha cuidado com tentativas de fraude e impersonação.</Text>
            <Text style={{color:"black", marginTop:520, marginStart:-350, fontSize:15}}>Evite revelar informações pessoais relevantes.</Text>
            <Text style={{color:"black", marginTop:535, marginStart:-265, fontSize:15}}>A SANCHAT não utiliza cookies.</Text>

            <Text style={{color:"black", marginTop:570, marginStart:-295, fontSize:15}}>Agradeçemos a todos nossos usuários pela confiança</Text>
            <Text style={{color:"black", marginTop:585, marginStart:-290, fontSize:15}}>nosso trabalho. Att, SANCHAT</Text>
          

        </View>

        
        
        
            
        </>
    )

}
