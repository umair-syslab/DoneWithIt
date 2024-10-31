import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';
import RoleService from "./role.services";

const RegisterScreen = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: '',
    userstatus: '',
    country: '',
    state: '',
    city: ''
  });

//   useEffect(() => {
//     fetchCountries();
//   }, []);
useEffect(() => {
   getroles();
 }, []);
// console.log(getroles() , "This is the value")

//  const getroles = async () => {
//    try {
//       const data = await response.data.data;
//       setCountries(data);
//       console.log("Roles:-", data);
//    } catch (error) {
//      console.log("error", error);
//    }
//  };
const getroles = async () => {
   try {
     const sessionID = 'eKV-CkKv2NTHKk_yYgp_6aYuCIqzQZnY'; // Manually setting the session ID
 
     const response = await RoleService.getAll(sessionID); // Pass the session ID directly
     if (response.data.message === "Unauthorized") {
       console.log('Unauthorized access, please login again');
       // Handle unauthorized access (e.g., navigate to login or handle the error)
     } else {
       const data = response.data.data;
       setCountries(data); // Assuming setCountries is used to update some state
       console.log("Roles:", data);
     }
   } catch (error) {
     console.error("Error fetching roles:", error);
   }
 };



  const fetchCountries = async () => {
    // Simulated country data
    const data = [
      { Country: "Country1" },
      { Country: "Country2" },
      { Country: "Country3" },
    ];
    setCountries(data);
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedState('');
    setCities([]);

    // Simulated state data
    const filteredStates = [
      { State: "State1" }, 
      { State: "State2" }
    ];
    setStates(filteredStates);
  };

  const handleStateChange = (state) => {
    setSelectedState(state);

    // Simulated city data
    const filteredCities = [
      { City: "City1" }, 
      { City: "City2" }
    ];
    setCities(filteredCities);
  };

  const onSubmit = () => {
    console.log(formValues);
    Alert.alert("User Added", `User ${formValues.username} added successfully!`);
  };

  const validateForm = () => {
    return true; // Implement your validation logic
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{t('New User')}</Text>
      <Text>{t('Fill the form below to add a new User.')}</Text>

      <TextInput
        style={styles.input}
        placeholder={t('User Name')}
        onChangeText={(text) => setFormValues({ ...formValues, username: text })}
      />
      <TextInput
        style={styles.input}
        placeholder={t('Email')}
        keyboardType="email-address"
        onChangeText={(text) => setFormValues({ ...formValues, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder={t('Password')}
        secureTextEntry
        onChangeText={(text) => setFormValues({ ...formValues, password: text })}
      />
      <TextInput
        style={styles.input}
        placeholder={t('Confirm Password')}
        secureTextEntry
        onChangeText={(text) => setFormValues({ ...formValues, confirmPassword: text })}
      />
      <TextInput
        style={styles.input}
        placeholder={t('Contact No')}
        keyboardType="phone-pad"
        onChangeText={(text) => setFormValues({ ...formValues, contact: text })}
      />

      <Text>{t('Country')}</Text>
      <Picker
        selectedValue={selectedCountry}
        onValueChange={(itemValue) => handleCountryChange(itemValue)}
      >
        <Picker.Item label={t('--Choose Country--')} value="" />
        {countries.map((country, index) => (
          <Picker.Item key={index} label={country.Country} value={country.Country} />
        ))}
      </Picker>

      <Text>{t('State/Province')}</Text>
      <Picker
        selectedValue={selectedState}
        onValueChange={(itemValue) => handleStateChange(itemValue)}
        enabled={states.length > 0}
      >
        <Picker.Item label={t('--Choose State--')} value="" />
        {states.map((state, index) => (
          <Picker.Item key={index} label={state.State} value={state.State} />
        ))}
      </Picker>

      <Text>{t('City')}</Text>
      <Picker
        selectedValue={formValues.city}
        onValueChange={(itemValue) => setFormValues({ ...formValues, city: itemValue })}
        enabled={cities.length > 0}
      >
        <Picker.Item label={t('--Choose City--')} value="" />
        {cities.map((city, index) => (
          <Picker.Item key={index} label={city.City} value={city.City} />
        ))}
      </Picker>

      <Button title={t('Add User')} onPress={onSubmit} disabled={!validateForm()} color="#FFD05C"/>
      {/* <Button title={t('Cancel')} onPress={() => console.log('Cancel')}  /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
});

export default RegisterScreen;
