import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  Keyboard 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function VerifyAccountScreen() {
  const [code, setCode] = useState(['', '', '']);
  const inputRefs = useRef([...Array(3)].map(() => React.createRef()));

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move to next input if there's a value and next input exists
    if (text && index < 2) {
      inputRefs.current[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (event, index) => {
    // Move to previous input on backspace if current input is empty
    if (event.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].current?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Verify Account</Text>
        <Text style={styles.subtitle}>
          Code has been send to johndoe@gmail.com.{'\n'}
          Enter code to verify your account.
        </Text>

        <Text style={styles.label}>Enter Code</Text>
        <View style={styles.codeContainer}>
          {[0, 1, 2].map((index) => (
            <TextInput
              key={index}
              ref={inputRefs.current[index]}
              style={styles.codeInput}
              maxLength={1}
              keyboardType="number-pad"
              value={code[index]}
              onChangeText={(text) => handleCodeChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>

        <TouchableOpacity 
          style={styles.verifyButton}
          onPress={() => {
            Keyboard.dismiss();
            // Add verification logic here
          }}
        >
          <Text style={styles.verifyButtonText}>Verify</Text>
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
  label: {
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 8,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 12,
    marginBottom: 24,
  },
  codeInput: {
    width: 48,
    height: 48,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    fontSize: 24,
    textAlign: 'center',
    color: '#1F2937',
  },
  verifyButton: {
    backgroundColor: '#0EA5E9',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});