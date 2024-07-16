import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Landing from './screens/LandingPage';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Dashboard from './screens/Dashboard';
import Writing from './screens/Writing';
import Settings from './screens/Settings';

const Stack = createStackNavigator();

export default function App() {
    return ( 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Writing" component={Writing} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Landing" component={Landing} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
