import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './homeStack.routes';
import WelcomeStack from './welcomeStack.routes';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home Stack" component={HomeStack} />
        <Tab.Screen name="Welcome Stack" component={WelcomeStack} />
      </Tab.Navigator>
  );
}