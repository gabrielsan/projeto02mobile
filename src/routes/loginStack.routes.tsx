import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Details, Map} from '../pages';
import Login from '../pages/Login';

const Stack = createStackNavigator();

export default function App() {
 
  return (
      <Stack.Navigator>

        <Stack.Screen name="Login" component={Login} />

      </Stack.Navigator>
  );
}