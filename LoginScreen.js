import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Logo = () => (
  <View style={styles.logoContainer}>
    <Image
      source={require('./assets/VSARA.png')} // Replace 'logo.png' with your actual logo file name
      style={styles.logoImage}
    />
    {/* <Text style={styles.logoText}>SARA</Text> */}
  </View>
);

export default function LoginScreen() {
  const navigation = useNavigation();  // Use navigation hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      
      <Text style={styles.title}>Login here</Text>
      <Text style={styles.subtitle}>Welcome Back</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
        />
        
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCompleteType="password"
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={togglePasswordVisibility}
            accessibilityLabel="Toggle password visibility"
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#999"
            />
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign in</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.signUpContainer}
      onPress={() => navigation.navigate('CreateAccountScreen')}>
        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
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
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  logoImage: {
    width: 120,
    height: 120,
    marginRight: 5,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 80,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    marginLeft: 5,
  },
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    fontSize: 16,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: '#0EA5E9',
    fontSize: 14,
  },
  nextButton: {
    backgroundColor: '#0EA5E9',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    width: 50,
  },
  signInButton: {
    backgroundColor: '#0EA5E9',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 16,
    color: '#666',
  },
  signUpLink: {
    color: '#0EA5E9',
    fontWeight: 'bold',
  },
});
