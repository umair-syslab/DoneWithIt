import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FrontScreen from './FrontScreen';
import RegisterScreen from './RegisterScreen';
import FlexPractice from './screensD/FlexPractice';


// Screens pa
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
import AppointmentRequestScreen from './screens/AppointmentRequestScreen';
import SelectVisitAddressScreen from './screens/SelectVisitAddressScreen';
import SelectDateTimeScreen from './screens/SelectDateTimeScreen';
import AddNewAddressScreen from './screens/AddNewAddressScreen';
import MyProfileScreenclient from './screens/MyProfileScreenclient';
import SettingsScreen from './screens/SettingsScreen';
import RequestedAppointmentsScreen from './screens/RequestedAppointmentsScreen';
import DoctorProfileScreen from './screens/DoctorProfileScreen'; 

// Models
import MedicineReminderModal from './Modals/MedicineReminderModal';
import SignupSuccessModal from './Modals/SignupSuccessModal';
import CompleteProfileModal from './Modals/CompleteProfileModal';
import ProfileNotVerifiedModal from './Modals/ProfileNotVerifiedModal';


// screen doctor
import UploadCertificatesScreen from './screensD/UploadCertificateScreen';
import MyProfileScreen from './screensD/MyProfileScreen';
import DocumentScreen from './screensD/DocumentScreen';
import CreateAccountDoctor from './screensD/CreateAccountDoctor';
import CreateAccountStep2Screen from './screensD/CreateAccountStep2Screen';
import HomeScreenDoctor from './screensD/HomeScreenDoctor';
import EditProfileScreen from './screensD/edit-profile-screen';
import SelectFamilyMember from './screens/SelectFamilyMember';
import AppointmentsScreen2 from './screensD/AppointmentsScreen2'
import PatientsScreen from './screensD/PatientsScreen';
import CurrentAppointmentsScreen from './screensD/CurrentAppointmentsPatientScreen';
import PatientDetailScreen from './screensD/PatientDetailScreen';

const Stack = createStackNavigator();

const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="CurrentAppointmentsScreen">
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
                   <Stack.Screen
               name="MedicineReminderModal"
               component={MedicineReminderModal}
               options={{ headerShown: false }}
            />
                  <Stack.Screen
               name="UploadCertificatesScreen"
               component={UploadCertificatesScreen}
               options={{ headerShown: false }}
            />
                  <Stack.Screen
               name="MyProfileScreen"
               component={MyProfileScreen}
               options={{ headerShown: false }}
            />
                   <Stack.Screen
               name="DocumentScreen"
               component={DocumentScreen}
               options={{ headerShown: false }}
            />
                  <Stack.Screen
               name="CreateAccountDoctor"
               component={CreateAccountDoctor}
               options={{ headerShown: false }}
            />
                  <Stack.Screen
               name="CreateAccountStep2Screen"
               component={CreateAccountStep2Screen}
               options={{ headerShown: false }}
            />
                 <Stack.Screen
               name="SignupSuccessModal"
               component={SignupSuccessModal}
               options={{ headerShown: false }}
            />
                  <Stack.Screen
               name="CompleteProfileModal"
               component={CompleteProfileModal}
               options={{ headerShown: false }}
            />
                   <Stack.Screen
               name="HomeScreenDoctor"
               component={HomeScreenDoctor}
               options={{ headerShown: false }}
            />
                    <Stack.Screen
               name="ProfileNotVerifiedModal"
               component={ProfileNotVerifiedModal}
               options={{ headerShown: false }}
            />
                   <Stack.Screen
               name="FlexPractice"
               component={FlexPractice}
               options={{ headerShown: false }}
            />
                      <Stack.Screen
               name="EditProfileScreen"
               component={EditProfileScreen}
               options={{ headerShown: false }}
            />
                  <Stack.Screen
               name="AppointmentRequestScreen"
               component={AppointmentRequestScreen}
               options={{ headerShown: false }}
            />
                  <Stack.Screen
               name="SelectVisitAddressScreen"
               component={SelectVisitAddressScreen}
               options={{ headerShown: false }}
            />
                 <Stack.Screen
               name="SelectDateTimeScreen"
               component={SelectDateTimeScreen}
               options={{ headerShown: false }}
            />
      
      <Stack.Screen
               name="AddNewAddressScreen"
               component={AddNewAddressScreen}
               options={{ headerShown: false }}
            />
           
              <Stack.Screen
               name="MyProfileScreenclient"
               component={MyProfileScreenclient}
               options={{ headerShown: false }}
            />
               <Stack.Screen
               name="SettingsScreen"
               component={SettingsScreen}
               options={{ headerShown: false }}
            />
                <Stack.Screen
               name="SelectFamilyMember"
               component={SelectFamilyMember}
               options={{ headerShown: false }}
            />
                 <Stack.Screen
               name="AppointmentsScreen2"
               component={AppointmentsScreen2}
               options={{ headerShown: false }}
            />
                  <Stack.Screen
               name="PatientsScreen"
               component={PatientsScreen}
               options={{ headerShown: false }}
            />
                  <Stack.Screen
               name="CurrentAppointmentsScreen"
               component={CurrentAppointmentsScreen}
               options={{ headerShown: false }}
            />
                  <Stack.Screen
               name="PatientDetailScreen"
               component={PatientDetailScreen}
               options={{ headerShown: false }}
            />

<Stack.Screen
               name="RequestedAppointmentsScreen"
               component={RequestedAppointmentsScreen}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="DoctorProfileScreen"
               component={DoctorProfileScreen}
               options={{ headerShown: false }}
            />



         </Stack.Navigator>

         
      </NavigationContainer>
   );
};

export default App;

