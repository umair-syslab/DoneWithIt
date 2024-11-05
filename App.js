import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FrontScreen from './FrontScreen';
import RegisterScreen from './RegisterScreen';



// Screens 
import First from './screens/First';
import WelcomeScreen from './screens/WelcomeScreen';
import CreateAccountScreen from './screens/CreateAccounScreen';
import LoginScreen from './screens/LoginScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import VerifyAccountScreen from './screens/VerifyAccountScreen';
import CreateNewPasswordScreen from './screens/CreateNewPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import SelectProfileScreen from './screens/SelectProfileScreen'
import NotificationsScreen from './screens/NotificationsScreen'
import FindDoctorScreen from './screens/FindDoctorScreen';
import StoreScreen from './screens/StoreScreen'
import ActionCards from './screens/ActionCards'
import ProductDetailScreen from './screens/ProductDetailScreen';
import AddNewMemberScreen from './screens/AddNewMemberScreen'
import AppointmentsScreen from './screens/AppointmentScreen';
import AboutScreen from './screens/AboutScreen';



const Stack = createStackNavigator();

const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="AboutScreen">
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
              <Stack.Screen
               name="ProductDetailScreen"
               component={ProductDetailScreen}
               options={{ headerShown: false }}
            />
               <Stack.Screen
               name="AddNewMemberScreen"
               component={AddNewMemberScreen}
               options={{ headerShown: false }}
            />
              <Stack.Screen
               name="AppointmentsScreen"
               component={AppointmentsScreen}
               options={{ headerShown: false }}
            />
                <Stack.Screen
               name="AboutScreen"
               component={AboutScreen}
               options={{ headerShown: false }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default App;

