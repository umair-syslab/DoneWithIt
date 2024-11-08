import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  ScrollView, 
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function UploadCertificatesScreen() {
  const navigation = useNavigation();
  const [files, setFiles] = useState([
    { id: '1', name: 'medical_certificate.pdf', status: 'success' },
    { id: '2', name: 'medical_certificate.jpeg', status: 'loading', progress: 75 },
    { id: '3', name: 'Error.file_not_recognized', status: 'error' },
  ]);

  const FileStatusIcon = ({ status }) => {
    switch (status) {
      case 'success':
        return <Ionicons name="checkmark-circle" size={24} color="#10B981" />;
      case 'loading':
        return <Ionicons name="time" size={24} color="#F59E0B" />;
      case 'error':
        return <Ionicons name="close-circle" size={24} color="#EF4444" />;
      default:
        return null;
    }
  };

  const handleUpload = () => {
    // Implement file upload logic
    console.log('Uploading file...');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>Upload your Medical Certificates</Text>
        <Text style={styles.subtitle}>
          Scanned copies of your medical degree, diplomas, or transcripts to verify your qualifications.
        </Text>

        <View style={styles.uploadArea}>
          <View style={styles.uploadIcon}>         
            <Ionicons name="arrow-up" size={24} color="#10B981" />
          </View>
          <Text style={styles.uploadText}>
            Browse File <Text style={styles.uploadSubtext}>to upload from your device.</Text>
          </Text>
          <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
            <Text style={styles.uploadButtonText}>Upload</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.filesList}>
          {files.map(file => (
            <View key={file.id} style={styles.fileItem}>
              <View style={styles.fileInfo}>
                <Ionicons name="document-outline" size={24} color="#6B7280" />
                <Text style={styles.fileName}>{file.name}</Text>
              </View>
              {file.status === 'loading' && (
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: `${file.progress}%` }]} />
                </View>
              )}
              <FileStatusIcon status={file.status} />
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.continueButton}  onPress={() => navigation.navigate('HomeScreenDoctor')}>
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
    padding: 16,
  },
  content: {
    flex: 1,
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
    marginBottom: 24,
    lineHeight: 24,
  },
  uploadArea: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  uploadIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E6FFFA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  uploadText: {
    fontSize: 16,
    marginBottom: 16,
  },
  uploadSubtext: {
    color: '#6B7280',
  },
  uploadButton: {
    backgroundColor: '#0EA5E9',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  filesList: {
    gap: 12,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
  },
  fileInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  fileName: {
    fontSize: 14,
    color: '#374151',
  },
  progressBar: {
    position: 'absolute',
    bottom: 0,
    left: 50,
    right: 40,
    height: 6,
    borderRadius:20,
    backgroundColor: '#E5E7EB',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#039BEF',
  },
  continueButton: {
    backgroundColor: '#0EA5E9',
    margin: 16,
    padding: 16,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 40
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});