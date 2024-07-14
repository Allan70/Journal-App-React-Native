import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Landing from './screens/LandingPage';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Dashboard from './screens/Dashboard';
import Writing from './screens/Writing';

const Stack = createStackNavigator();

export default function App() {
    return ( 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Writing" component={Writing} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Landing" component={Landing} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}


/** LAST GOOD COPY **/

// import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';

// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'

// import LandingPage from './pages/LandingPage';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Dashboard from './pages/Dashboard';

// const Stack = createStackNavigator();

// export default function App() {
//     return ( 
//     <NavigationContainer>
//       <Dashboard />
//     </NavigationContainer>
//     );
// }