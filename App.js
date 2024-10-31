import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FrontScreen from './FrontScreen';
import RegisterScreen from './RegisterScreen';
import First from './First';
import WelcomeScreen from './WelcomeScreen';
import CreateAccountScreen from './CreateAccounScreen';
import LoginScreen from './LoginScreen';
import CheckoutScreen from './CheckoutScreen';

const Stack = createStackNavigator();

const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="First">
         <Stack.Screen
               name="CheckoutScreen"
               component={CheckoutScreen}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="LoginScreen"
               component={LoginScreen}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="CreateAccountScreen"
               component={CreateAccountScreen}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="WelcomeScreen"
               component={WelcomeScreen}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="First"
               component={First}
               options={{ headerShown: false }}
            />
          
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default App;

