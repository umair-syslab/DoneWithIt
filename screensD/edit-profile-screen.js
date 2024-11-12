import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  ScrollView,
  Image,
  Platform
} from 'react-native';
import { 
  ArrowLeft, 
  MapPin, 
  Camera, 
  Calendar, 
  Plus, 
  X, 
  ChevronDown 
} from 'lucide-react-native';
import { Ionicons } from '@expo/vector-icons';

const EditProfileScreen = () => {
  const [fullName, setFullName] = useState('Dr John Deo');
  const [gender, setGender] = useState('Male');
  const [biography, setBiography] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [specialization, setSpecialization] = useState('Heart Specialist');
  const [services, setServices] = useState([
    { id: '1', name: 'Heart Specialist' }
  ]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const removeService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  const addService = () => {
    // Implementation for adding new service
    const newService = { id: Date.now().toString(), name: 'New Service' };
    setServices([...services, newService]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <MapPin size={24} color="#000" />
        </TouchableOpacity>
      </View>

<ScrollView style={styles.content}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              <Ionicons name="person-outline" size={40} color="#CBD5E1" />
            </View>
            <TouchableOpacity style={styles.cameraButton}>
              <Ionicons name="camera" size={20} color="#000" />
            </TouchableOpacity>
          </View>


        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name as per NRIC*</Text>
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
              placeholder="Enter full name"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Gender</Text>
            <View style={styles.genderContainer}>
              <TouchableOpacity
                style={[
                  styles.genderButton,
                  gender === 'Male' && styles.genderButtonActive
                ]}
                onPress={() => setGender('Male')}
              >
                <Text
                  style={[
                    styles.genderButtonText,
                    gender === 'Male' && styles.genderButtonTextActive
                  ]}
                >
                  Male
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.genderButton,
                  gender === 'Female' && styles.genderButtonActive
                ]}
                onPress={() => setGender('Female')}
              >
                <Text
                  style={[
                    styles.genderButtonText,
                    gender === 'Female' && styles.genderButtonTextActive
                  ]}
                >
                  Female
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Add Your Biography</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={biography}
              onChangeText={setBiography}
              placeholder="Add text here.."
              placeholderTextColor="#9CA3AF"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date of Birth</Text>
            <TouchableOpacity style={styles.dateInput}>
              <Text style={styles.dateInputText}>
                {dateOfBirth || 'DD / MM / YYYY'}
              </Text>
              <Calendar size={20} color="#6B7280" />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Specialization</Text>
            <TextInput
              style={styles.input}
              value={specialization}
              onChangeText={setSpecialization}
              placeholder="Enter specialization"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          {/* <View style={styles.inputContainer}>
            <Text style={styles.label}>Other Services</Text>
            <View style={styles.servicesContainer}>
              {services.map(service => (
                <View key={service.id} style={styles.serviceChip}>
                  <Text style={styles.serviceChipText}>{service.name}</Text>
                  <TouchableOpacity
                    onPress={() => removeService(service.id)}
                    style={styles.serviceChipRemove}
                  >
                    <X size={16} color="#fff" />
                  </TouchableOpacity>
                </View>
              ))}
              <TouchableOpacity style={styles.addButton} onPress={addService}>
                <Plus size={24} color="#0EA5E9" />
              </TouchableOpacity>
            </View>
          </View> */}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.phoneInputContainer}>
              <TouchableOpacity style={styles.countryCode}>
                <Text style={styles.countryCodeText}>+60</Text>
                <ChevronDown size={20} color="#6B7280" />
              </TouchableOpacity>
              <TextInput
                style={[styles.input, styles.phoneInput]}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="Enter number"
                placeholderTextColor="#9CA3AF"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter email"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date & Time</Text>
            <TouchableOpacity style={styles.availabilityButton}>
              <Text style={styles.availabilityButtonText}>
                Set your Availability
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    marginTop:25
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },

content: {
    flex: 1,
    // padding: 16,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraButton: {
    position: 'absolute',
    right: '35%',
    bottom: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  form: {
    padding: 16,
    gap: 20,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#1F2937',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  genderContainer: {
    flexDirection: 'row',
    gap: 12,
  },
genderButton: {
    flex: 0,             
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start' // Align the button to the left within its container
  },
  genderButtonActive: {
    backgroundColor: '#10B981',
  },
  genderButtonText: {
    fontSize: 16,
    color: '#6B7280',
  },
  genderButtonTextActive: {
    color: '#fff',
  },
  dateInput: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateInputText: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  serviceChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10B981',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  serviceChipText: {
    color: '#fff',
    marginRight: 8,
  },
  serviceChipRemove: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  countryCode: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  countryCodeText: {
    fontSize: 16,
    color: '#1F2937',
  },
  phoneInput: {
    flex: 1,
  },
  availabilityButton: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 12,
  },
  availabilityButtonText: {
    fontSize: 16,
    color: '#6B7280',
  },
  saveButton: {
    backgroundColor: '#0EA5E9',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EditProfileScreen;