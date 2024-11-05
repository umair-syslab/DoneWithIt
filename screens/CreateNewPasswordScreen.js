import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CreateNewPasswordScreen() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Create New Password</Text>
        <Text style={styles.subtitle}>
          Please enter and confirm your new password.{'\n'}
          You will need to login after you reset.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              placeholder="Enter your password"
              placeholderTextColor="#9CA3AF"
            />
            <TouchableOpacity 
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons 
                name={showPassword ? "eye-off-outline" : "eye-outline"} 
                size={24} 
                color="#9CA3AF" 
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              placeholder="Confirm your password"
              placeholderTextColor="#9CA3AF"
            />
            <TouchableOpacity 
              style={styles.eyeIcon}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Ionicons 
                name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} 
                size={24} 
                color="#9CA3AF" 
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 8,
  },
  passwordContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    padding: 16,
    fontSize: 16,
    color: '#1F2937',
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
  },
  resetButton: {
    backgroundColor: '#0EA5E9',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});