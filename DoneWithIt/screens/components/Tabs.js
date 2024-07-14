import React from 'react'
import { createTabNavigator } from '@react-navigation/stack'

import Dashboard from '../Dashboard';
import Login from '../Login';
import Signup from '../Signup';
import Writing from '../Writing';

const Tab = createTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={Signup} />
      <Tab.Screen name="Writing" component={Writing} />
    </Tab.Navigator>
  )`  `
}
