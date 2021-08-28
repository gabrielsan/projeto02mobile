import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Map from '../pages/Map';
import Details from '../pages/Details';

const Stack = createStackNavigator();

export default function App() {
  
  return (
      <Stack.Navigator>
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
  );
}