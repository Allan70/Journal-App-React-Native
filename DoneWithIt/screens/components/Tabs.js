import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../Dashboard';
import Login from '../Login';
import Signup from '../Signup';
import Writing from '../Writing';
import Settings from '../Settings';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={Signup} />
      <Tab.Screen name="Writing" component={Writing} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}
