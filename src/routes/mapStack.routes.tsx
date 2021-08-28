import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Details} from '../pages';
import Map from '../pages/Map';

const Stack = createStackNavigator();

export default function App() {
  
  return (
      <Stack.Navigator>
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
  );
}