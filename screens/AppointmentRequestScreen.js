import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  Image,
  ScrollView 
} from 'react-native';
import { 
  ArrowLeft, 
  ChevronRight, 
  Clock, 
  MapPin,
  Plus,
  X,
  AlertCircle
} from 'lucide-react-native';

const AppointmentRequestScreen = () => {
  const [symptoms, setSymptoms] = useState([
    { id: '1', name: 'Fever' },
    { id: '2', name: 'Cough' }
  ]);
  const [notes, setNotes] = useState('');

  const removeSymptom = (id) => {
    setSymptoms(symptoms.filter(symptom => symptom.id !== id));
  };

  const addSymptom = () => {
    // Implementation for adding new symptom
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Appointment Request</Text>
        {/* <View style={{ width: 24 }} /> For alignment */}
      </View>

      <ScrollView style={styles.content}>
        <TouchableOpacity style={styles.selectionCard}>
          <View style={styles.patientInfo}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/100?img=1' }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.label}>Patient</Text>
              <Text style={styles.value}>John Doe</Text>
            </View>
          </View>
          <ChevronRight size={24} color="#6B7280" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.selectionCard}>
          <View style={styles.iconSection}>
            <View style={styles.iconContainer}>
              <Clock size={20} color="#6B7280" />
            </View>
            <View>
              <Text style={styles.label}>When you need?</Text>
              <View style={styles.timingContainer}>
                <Text style={styles.value}>Immediate</Text>
                <Text style={styles.waitingTime}>Estimated 45min waiting</Text>
              </View>
            </View>
          </View>
          <ChevronRight size={24} color="#6B7280" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.selectionCard}>
          <View style={styles.iconSection}>
            <View style={styles.iconContainer}>
              <MapPin size={20} color="#6B7280" />
            </View>
            <View>
              <Text style={styles.label}>Location</Text>
              <Text style={styles.value}>Office</Text>
            </View>
          </View>
          <ChevronRight size={24} color="#6B7280" />
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Symptoms</Text>
          <View style={styles.symptomsContainer}>
            {symptoms.map(symptom => (
              <View key={symptom.id} style={styles.symptomChip}>
                <Text style={styles.symptomText}>{symptom.name}</Text>
                <TouchableOpacity
                  onPress={() => removeSymptom(symptom.id)}
                  style={styles.removeButton}
                >
                  <X size={16} color="#fff" />
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity style={styles.addButton} onPress={addSymptom}>
              <Plus size={24} color="#0EA5E9" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Add Note</Text>
          <TextInput
            style={styles.notesInput}
            value={notes}
            onChangeText={setNotes}
            placeholder="Add notes for our reference"
            placeholderTextColor="#9CA3AF"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        <View style={styles.infoBox}>
          <AlertCircle size={20} color="#F59E0B" />
          <Text style={styles.infoText}>
            Our verified doctors will share their fees. Review profiles and easily accept or decline.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.findDoctorButton}>
          <Text style={styles.findDoctorButtonText}>Find Doctor</Text>
        </TouchableOpacity>
      </View>
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
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    marginTop:20
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 100,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  selectionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  patientInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  iconSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  label: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '500',
  },
  timingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  waitingTime: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 8,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 12,
  },
  symptomsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  symptomChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10B981',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  symptomText: {
    color: '#fff',
    marginRight: 8,
  },
  removeButton: {
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
  notesInput: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 12,
    height: 100,
    fontSize: 16,
    color: '#1F2937',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
  },
  infoText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: '#92400E',
    lineHeight: 20,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ffffff',
  },
  findDoctorButton: {
    backgroundColor: '#0EA5E9',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    marginBottom:22
  },
  findDoctorButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AppointmentRequestScreen;