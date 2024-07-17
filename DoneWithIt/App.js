import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 

import Landing from './screens/LandingPage';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Dashboard from './screens/Dashboard';
import Writing from './screens/Writing';
import Settings from './screens/Settings';
import Editing from './screens/Editing';
import Search from './screens/Search';
import CustomTabBar from './screens/components/CustomTabBar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen 
        name="Home" 
        component={Dashboard}  
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Editing" 
        component={Writing}  
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="create-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Writing" 
        component={Editing}  
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pencil-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Search" 
        component={Search}  
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Settings" 
        component={Settings}  
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="KALAMU" 
          component={HomeTabs} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Signup" 
          component={Signup}  
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login}  
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Landing" 
          component={Landing}  
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
