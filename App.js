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
import ForgotPasswordScreen from './ForgotPasswordScreen';
import VerifyAccountScreen from './VerifyAccountScreen';
import CreateNewPasswordScreen from './CreateNewPasswordScreen';
import HomeScreen from './HomeScreen';
import SelectProfileScreen from './SelectProfileScreen'
import NotificationsScreen from './NotificationsScreen'
import FindDoctorScreen from './FindDoctorScreen';
import StoreScreen from './StoreScreen'
import ActionCards from './ActionCards'

const Stack = createStackNavigator();

const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="ActionCards">
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
             <Stack.Screen
               name="ForgotPasswordScreen"
               component={ForgotPasswordScreen}
               options={{ headerShown: false }}
            />
              <Stack.Screen
               name="VerifyAccountScreen"
               component={VerifyAccountScreen}
               options={{ headerShown: false }}
            />
              <Stack.Screen
               name="CreateNewPasswordScreen"
               component={CreateNewPasswordScreen}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="HomeScreen"
               component={HomeScreen}
               options={{ headerShown: false }}
            />
             <Stack.Screen
               name="SelectProfileScreen"
               component={SelectProfileScreen}
               options={{ headerShown: false }}
            />
                <Stack.Screen
               name="NotificationsScreen"
               component={NotificationsScreen}
               options={{ headerShown: false }}
            />
               <Stack.Screen
               name="FindDoctorScreen"
               component={FindDoctorScreen}
               options={{ headerShown: false }}
            />
               <Stack.Screen
               name="StoreScreen"
               component={StoreScreen}
               options={{ headerShown: false }}
            />
              <Stack.Screen
               name="ActionCards"
               component={ActionCards}
               options={{ headerShown: false }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default App;

