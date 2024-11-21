import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  ScrollView 
} from 'react-native';
import { 
  MapPin,
  Home,
  Calendar,
  MessageSquare,
  User
} from 'lucide-react-native';

export default function PatientsScreen() {
  const [activeTab, setActiveTab] = useState('rejected');

  const tabs = [
    { id: 'current', label: 'Current' },
    { id: 'requested', label: 'Requested' },
    { id: 'rejected', label: 'Rejected' }
  ];

  const patients = [
    {
      id: '1',
      name: 'Roesalian Raimond',
      image: 'https://i.pravatar.cc/100?img=3',
      condition: 'Hypertension',
      location: 'Tangerang Medical Centre'
    },
    {
      id: '2',
      name: 'Roesalian Raimond',
      image: 'https://i.pravatar.cc/100?img=3',
      condition: 'Hypertension',
      location: 'Tangerang Medical Centre'
    }
  ];

  const handleRemove = (patientId) => {
    console.log('Remove patient:', patientId);
  };

  const handleAddFee = (patientId) => {
    console.log('Add fee for patient:', patientId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Patients</Text>
      </View>

      <View style={styles.tabContainer}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.tab,
              activeTab === tab.id && styles.activeTab
            ]}
            onPress={() => setActiveTab(tab.id)}
          >
            <Text style={[
              styles.tabText,
              activeTab === tab.id && styles.activeTabText
            ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.content}>
        {patients.map(patient => (
          <View key={patient.id} style={styles.patientCard}>
            <View style={styles.patientInfo}>
              <Image
                source={{ uri: patient.image }}
                style={styles.patientImage}
              />
              <View style={styles.patientDetails}>
                <Text style={styles.patientName}>{patient.name}</Text>
                <Text style={styles.conditionText}>{patient.condition}</Text>
                <View style={styles.locationContainer}>
                  <MapPin size={16} color="#6B7280" />
                  <Text style={styles.locationText}>{patient.location}</Text>
                </View>
              </View>
            </View>

            <View style={styles.actionButtons}>
              <TouchableOpacity 
                style={styles.removeButton}
                onPress={() => handleRemove(patient.id)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.addFeeButton}
                onPress={() => handleAddFee(patient.id)}
              >
                <Text style={styles.addFeeButtonText}>Add Fee</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Home size={24} color="#6B7280" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Calendar size={24} color="#0EA5E9" />
          <Text style={[styles.navText, styles.navTextActive]}>Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MessageSquare size={24} color="#6B7280" />
          <Text style={styles.navText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <User size={24} color="#6B7280" />
          <Text style={styles.navText}>Profile</Text>
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    marginTop:24
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginLeft: 130,
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#10B981',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  patientCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 12,
    gap: 16,
  },
  patientInfo: {
    flexDirection: 'row',
    gap: 12,
  },
  patientImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  patientDetails: {
    flex: 1,
    gap: 4,
  },
  patientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  conditionText: {
    fontSize: 14,
    color: '#6B7280',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontSize: 14,
    color: '#6B7280',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  removeButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
  },
  removeButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  addFeeButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#0EA5E9',
    alignItems: 'center',
  },
  addFeeButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
    gap: 4,
  },
  navItemActive: {
    color: '#0EA5E9',
  },
  navText: {
    fontSize: 12,
    color: '#6B7280',
  },
  navTextActive: {
    color: '#0EA5E9',
  },
});