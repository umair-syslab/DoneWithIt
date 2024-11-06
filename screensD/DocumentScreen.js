import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function DocumentsScreen() {
  const documents = [
    { id: '1', title: 'Medical Certificates', icon: 'ribbon-outline', hasWarning: true },
    { id: '2', title: 'Professional ID cards', icon: 'card-outline', hasWarning: true },
    { id: '3', title: 'Medical License', icon: 'key-outline', hasWarning: true },
    { id: '4', title: 'Specialization Certificates', icon: 'school-outline', hasWarning: true },
    { id: '5', title: 'Council Registration', icon: 'shield-checkmark-outline', hasWarning: true },
  ];

  const DocumentListItem = ({ item }) => (
    <TouchableOpacity style={styles.documentItem}>
      <View style={styles.documentItemLeft}>
        <View style={styles.documentIconContainer}>
          <Ionicons name={item.icon} size={24} color="#00000" />
        </View>
        <Text style={styles.documentTitle}>{item.title}</Text>
      </View>
      <View style={styles.documentItemRight}>
        {item.hasWarning && (
          <Ionicons name="warning" size={20} color="#EF4444" style={styles.warningIcon} />
        )}
        <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Documents</Text>
      </View>

      <ScrollView style={styles.content}>
        {documents.map(document => (
          <DocumentListItem key={document.id} item={document} />
        ))}
      </ScrollView>
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    position: 'relative', 
    marginTop: 20
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    position: 'absolute', 
    left: '50%',
    transform: [{ translateX: -50 }], 
  },
  content: {
    flex: 1,
    padding: 12,
  },
  documentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  documentItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  documentIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  documentTitle: {
    fontSize: 16,
    color: '#1F2937',
  },
  documentItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  warningIcon: {
    marginRight: 8,
  },
});
