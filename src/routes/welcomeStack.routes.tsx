import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Welcome, Goodbye} from '../pages'

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Goodbye" component={Goodbye} />
      </Stack.Navigator>
  );
}