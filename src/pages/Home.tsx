import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Buttom, Container , Text  } from '../styles/Container';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Details from './Details';
import { ImageBackground } from 'react-native';
import { View, Image } from 'react-native';

export default function Home(){
    const navigation = useNavigation();
    function handleDetails(){
      navigation.navigate("Details"); 
    }
    return(
        <Container>
          

      <View>   
        
               <ImageBackground 
               source={require('../../assets/fundo.png')}
               style={{flex:1, alignItems:'center', marginRight:70, marginLeft:70, justifyContent:"center", width:500}} 
               >

            <View style={{justifyContent:"space-between", flexDirection:"row"}}>
                <Text style={{color:"black"}}>Fazer Login</Text>
                <Text>                                        </Text>
                <Text style={{color:"black"}}>Sobre</Text>
            </View>

            
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>

            <View><Image source={require('../../assets/logo.jpg')} style={{marginBottom:90}}/>
           </View>


        <View style={{justifyContent:"space-between", flexDirection:"row"}}>
           <View> 
           <Buttom onPress={handleDetails} style={{alignItems:"center", height:70}} >             
                <Text style={{marginVertical:15}}>Texto</Text>
            </Buttom >
            </View>
            <View> 
            <Buttom onPress={handleDetails } style={{marginLeft:20, alignItems:"center", height:70}}>
               <Text style={{marginVertical:15}}>Video</Text>
            </Buttom>
         </View>
        </View> 
      



        <TextInput 
        style={{   
        backgroundColor:"white",  
        borderColor:"purple", 
        margin:10,
        padding:10,
        width: 300,
        borderWidth:1,
        borderRadius:9,}}
       
        placeholder="Escolha um idioma"
       />
     

           <Buttom>
               <Text>Criar conta</Text>
            </Buttom>

            <Text></Text>
            <Text> </Text>
            <Text> </Text>
          
            <Text style={{color:"gray", fontSize:15}}>This site is protected by reCAPTCHA and the Google</Text>
            <Text style={{color:"gray", fontSize:15}}>Privacy Policy and Terms of Service apply.</Text>
            <Text style={{color:"gray", fontSize:15}}>@SANCHAT 2021</Text>
            </ImageBackground>
            </View>


        </Container>
    )

}

 