import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Welcome, GoodBye} from '../pages'

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="GoodBye" component={GoodBye} />
      </Stack.Navigator>
  );
}