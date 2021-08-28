import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Details, Map, Welcome} from '../pages';
import Login from '../pages/Login';
import Sobre from '../pages/Sobre';

const Stack = createStackNavigator();

export default function App() {
  //se eu quiser ver o mapa, trocar a variavel Home para Map
  return (
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Sobre" component={Sobre} /> 
        <Stack.Screen name="Map" component={Map} />
        
        
       
        
        
      </Stack.Navigator>
  );
}