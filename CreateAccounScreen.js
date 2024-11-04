import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CreateAccountScreen() {
  const navigation = useNavigation();  // Use navigation hook
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Create an account so you can explore all pharmacies, devices and doctors.
      </Text>
      <Text style={styles.label}>First Name                             Last Name</Text> 
      
      <View style={styles.inputContainer}>
        <View style={styles.nameContainer}>
            
          <TextInput
            style={[styles.input, styles.nameInput]}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={[styles.input, styles.nameInput]}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#999"
            />
          </TouchableOpacity>
        </View>
        
        <View style={styles.passwordContainer}>
        <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon2nd}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons
              name={showConfirmPassword ? "eye-off" : "eye"}
              size={24}
              color="#999"
            />
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity style={styles.nextButton}
      >
        <Text style={styles.nextButtonText}>Sign up</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.signInContainer}>
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.signInLink} onPress={() => navigation.navigate('LoginScreen')}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    marginLeft: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 15,
    marginBottom: 30,
    fontSize: 16,
  },
  nameInput: {
    flex: 0.48,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 20,
  },
  eyeIcon2nd: {
    position: 'absolute',
    right: 15,
    top: 40,
  },
  nextButton: {
    backgroundColor: '#0EA5E9',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signInText: {
    fontSize: 16,
    color: '#666',
  },
  signInLink: {
    color: '#0EA5E9',
    fontWeight: 'bold',
  },
});
