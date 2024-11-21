import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { ArrowLeft } from 'lucide-react-native';

export default function AddNewAddressScreen() {
  // const [searchAddress, setSearchAddress] = useState('');
  const [address, setAddress] = useState('');
  const [unitNumber, setUnitNumber] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [locationName, setLocationName] = useState('');

  const handleUpdate = () => {
    // Implement update logic here
    console.log('Update address');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
  <TouchableOpacity style={styles.backButton}>
    <ArrowLeft size={24} color="#000" />
  </TouchableOpacity>
  <Text style={styles.headerTitle}>Add New Address</Text>
</View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              {/* <Text style={styles.label}>Search Address Or Postal Code*</Text> */}
              {/* <TextInput
                style={styles.input}
                value={searchAddress}
                onChangeText={setSearchAddress}
                placeholder="Search address or postal code"
                placeholderTextColor="#9CA3AF"
              /> */}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Address or Postal</Text>
              <TextInput
                style={styles.input}
                value={address}
                onChangeText={setAddress}
                placeholder="Enter address or postal"
                placeholderTextColor="#9CA3AF"
              />
            </View>

            <View style={styles.rowContainer}>
              <View style={[styles.inputContainer, styles.halfWidth]}>
                <Text style={styles.label}>Unit Number</Text>
                <TextInput
                  style={styles.input}
                  value={unitNumber}
                  onChangeText={setUnitNumber}
                  placeholder="123"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                />
              </View>
              <View style={[styles.inputContainer, styles.halfWidth]}>
                <Text style={styles.label}>Postal Code*</Text>
                <TextInput
                  style={styles.input}
                  value={postalCode}
                  onChangeText={setPostalCode}
                  placeholder="1236"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Name this location</Text>
              <TextInput
                style={styles.input}
                value={locationName}
                onChangeText={setLocationName}
                placeholder="Enter name"
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
            <Text style={styles.updateButtonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    marginTop: 20,
    position: 'relative',
  },
  headerTitle: {
    fontSize: 16, // Increase font size for better visibility
    fontWeight: 'bold',
    color: '#1F2937',
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  form: {
    padding: 16,
    gap: 16,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5563',
  },
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#1F2937',
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  halfWidth: {
    flex: 1,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#FFFFFF',
    marginBottom: 22,
  },
  updateButton: {
    backgroundColor: '#0EA5E9',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});