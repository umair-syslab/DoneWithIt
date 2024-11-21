import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FindDoctorScreen() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([
    'Cough',
    'Fever',
    'Loss of appetite',
    'Pain(not specified)'
  ]);
  const [searchText, setSearchText] = useState('');
  const [symptomText, setSymptomText] = useState('');

  const symptoms = [
    { id: '1', name: 'Abdominal or stomach pain' },
    { id: '2', name: 'Bleeding' },
    { id: '3', name: 'Cough' },
    { id: '4', name: 'Fever' },
    { id: '5', name: 'Loss of appetite' },
    { id: '6', name: 'Low back pain' },
    { id: '7', name: 'Pain(not specified)' },
    { id: '8', name: 'Shortness of breath' },
    { id: '9', name: 'Wound Dressing' },
    { id: '10', name: 'Snoring' },
    { id: '11', name: 'Weakness' },
    { id: '12', name: 'Sleep disorder' },
  ];

  const categories = [
    { id: '1', name: 'General Practitioners' },
    { id: '2', name: 'Pediatricians' },
    { id: '3', name: 'Gynecologists' },
    { id: '4', name: 'Dermatologists' },
    { id: '5', name: 'Psychiatrists' },
    { id: '6', name: 'Endocrinologists' },
  ];

  const toggleSymptom = (symptomName) => {
    if (selectedSymptoms.includes(symptomName)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptomName));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptomName]);
    }
  };

  const addSymptom = () => {
    if (symptomText && !selectedSymptoms.includes(symptomText)) {
      setSelectedSymptoms([...selectedSymptoms, symptomText]);
      setSymptomText(''); // Clear the input field after adding
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Find Doctor</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity style={styles.searchIcon}>
            <Ionicons name="search" size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Add Symptoms</Text>
          <View style={styles.inputWithButton}>
            <TextInput
              style={styles.symptomInput}
              placeholder="Type your symptom here..."
              placeholderTextColor="#6B7280"
              value={symptomText}
              onChangeText={setSymptomText}
            />
            <TouchableOpacity style={styles.addButton} onPress={addSymptom}>
              <Ionicons name="add" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.symptomsContainer}>
            {symptoms.map(symptom => (
              <TouchableOpacity
                key={symptom.id}
                style={[
                  styles.symptomTag,
                  selectedSymptoms.includes(symptom.name) && styles.selectedSymptomTag
                ]}
                onPress={() => toggleSymptom(symptom.name)}
              >
                <Text
                  style={[
                    styles.symptomText,
                    selectedSymptoms.includes(symptom.name) && styles.selectedSymptomText
                  ]}
                >
                  {symptom.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.infoDot} />
            <Text style={styles.infoText}>
              If you don't see your symptom, please enter it above.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>By Categories</Text>
          <View style={styles.categoriesContainer}>
            {categories.map(category => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryTag}
              >
                <Text style={styles.categoryText}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 120,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 12,
    paddingRight: 40,
    fontSize: 16,
  },
  searchIcon: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#1F2937',
  },
  inputWithButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  symptomInput: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  addButton: {
    backgroundColor: '#4A90E2',
    padding: 12,
    borderRadius: 12,
    marginLeft: 8,
    marginBottom:12
  },
  symptomsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  symptomTag: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  selectedSymptomTag: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  symptomText: {
    color: '#1F2937',
    fontSize: 14,
  },
  selectedSymptomText: {
    color: '#fff',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FBFBFB',
    padding: 12,
    borderRadius: 8,
  },
  infoDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#F59E0B',
    marginRight: 8,
  },
  infoText: {
    color: '#92400E',
    fontSize: 14,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryTag: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  categoryText: {
    color: '#1F2937',
    fontSize: 14,
  },
  continueButton: {
    backgroundColor: '#0EA5E9',
    margin: 20,
    padding: 16,
    borderRadius: 20,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
