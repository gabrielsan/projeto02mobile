import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './homeStack.routes';




const Tab = createBottomTabNavigator();

export default function App() {
  return (
   
      <Tab.Navigator>
       <Tab.Screen name="Home" component={HomeStack}/>
        
      </Tab.Navigator>
  );
}