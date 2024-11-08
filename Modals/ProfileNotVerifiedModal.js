import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Modal,
  Dimensions 
} from 'react-native';
import { X } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const MODAL_WIDTH = width * 0.85;

export default function ProfileNotVerifiedModal({
  visible,
  onClose,
  onUpload
}) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity 
            style={styles.closeButton} 
            onPress={onClose}
          >
            <X size={24} color="#6B7280" />
          </TouchableOpacity>

          <View style={styles.content}>
            <View style={styles.iconContainer}>
              <View style={styles.iconCircle}>
                <View style={styles.documentIcon}>
                  <View style={styles.documentBase} />
                  <View style={styles.documentDot} />
                  <View style={styles.documentX}>
                    <View style={[styles.xLine, styles.xLine1]} />
                    <View style={[styles.xLine, styles.xLine2]} />
                  </View>
                </View>
              </View>
            </View>

            <Text style={styles.title}>Profile not Verified</Text>
            <Text style={styles.message}>
              Upload your documents to approve your profile .
            </Text>

            <TouchableOpacity 
              style={styles.uploadButton}
              onPress={onUpload}
            >
              <Text style={styles.uploadButtonText}>Upload</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: MODAL_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
  },
  closeButton: {
    position: 'absolute',
    right: 16,
    top: 16,
    zIndex: 1,
  },
  content: {
    alignItems: 'center',
    marginTop: 12,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#EF4444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  documentIcon: {
    width: 30,
    height: 36,
    position: 'relative',
  },
  documentBase: {
    width: 30,
    height: 36,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  documentDot: {
    position: 'absolute',
    width: 8,
    height: 8,
    backgroundColor: '#EF4444',
    borderRadius: 4,
    top: 8,
    left: 11,
  },
  documentX: {
    position: 'absolute',
    width: 16,
    height: 16,
    bottom: 6,
    left: 7,
  },
  xLine: {
    position: 'absolute',
    width: 2,
    height: 16,
    backgroundColor: '#EF4444',
    left: 7,
  },
  xLine1: {
    transform: [{ rotate: '45deg' }],
  },
  xLine2: {
    transform: [{ rotate: '-45deg' }],
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EF4444',
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  uploadButton: {
    width: '80%',
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#0EA5E9',
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});