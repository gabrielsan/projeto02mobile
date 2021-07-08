import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Buttom, Container , Text  } from '../styles/Container';
import Details from './Details';

export default function Home(){
    const navigation = useNavigation();
    function handleDetails(){
      navigation.navigate("Details"); 
    }
    return(
        <Container>
            <Text>Página Inicial</Text>
            <Buttom onPress={handleDetails}>
               <Text>Detalhes</Text>
            </Buttom>
        </Container>
    )
}