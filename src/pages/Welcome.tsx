import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Buttom, Container , Text  } from '../styles/Container';

export default function Welcome(){
    const navigation = useNavigation();
    function handleGoodbye(){
      navigation.navigate("GoodBye"); 
    }
    return(
        <Container>
            <Text>Seja Bem vindo</Text>
            <Buttom onPress={handleGoodbye}>
               <Text>Tchau</Text>
            </Buttom>
            
        </Container>
    )
}