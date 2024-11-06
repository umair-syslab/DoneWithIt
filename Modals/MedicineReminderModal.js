import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  Modal,
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const MODAL_WIDTH = width * 0.85;

export default function MedicineReminderModal({
  visible,
  onClose,
  onSkip,
  onTake
}) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>

          <View style={styles.content}>
            {/* Pill Icon */}
            <View style={styles.iconContainer}>
              <Text style={styles.pillEmoji}>💊</Text>
            </View>

            {/* Greeting */}
            <View style={styles.greetingContainer}>
              <Text style={styles.greeting}>
                Hello John! <Text style={styles.waveEmoji}>👋</Text>
              </Text>
              <Text style={styles.reminderText}>
                It's time to Take your 12PM medicine.
              </Text>
            </View>

            {/* Medicine Details */}
            <View style={styles.medicineContainer}>
              <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/d53e/bf4c/19fb7c49d2427fee179f1ebc464a09c0?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AwUy4PWGJE4cbD0h3IC5JapVL9lbaFndpyl3Og5IH7P70i-W4C3vos7JVCbTqYeNv53SwCKCxRqOaafDEh4kLyopRH5MfdcBv1gUMeFQwT8Tkqmk3BC4rtET7m2zo8mFG~60~t5wpfX6cIn60z9B1XucOAtkHC5wOnh417oKgQYtPt~mfD3un1NQn~oda91L--CQAe8PxInubfhHEqyCpQIqgGLTtSuaG-LFbi1fD-ZVCR4gWbwINS4HkzeepkPXDQfg2S-esO5K0jZG2VZYOsXqopmYOIFNI7Kut1cok8fksbQ-jmZmLbvPawY61RUKkXhCnUJRmaLn7EjO1urRjw__' }}
                style={styles.medicineImage}
              />
              <View style={styles.medicineInfo}>
                <Text style={styles.medicineName}>
                  Nurofen Fiebersaft Erber 40 mg/ml
                </Text>
                <View style={styles.dosageContainer}>
                  <Text style={styles.dosageText}>1 Pill,Once per day 150ml</Text>
                  <View style={styles.pillCount}>
                    <Text style={styles.pillCountText}>x1</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.skipButton} onPress={onSkip}>
                <Ionicons name="close" size={20} color="#6B7280" />
                <Text style={styles.skipButtonText}>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.takeButton} onPress={onTake}>
                <Ionicons name="checkmark" size={20} color="#fff" />
                <Text style={styles.takeButtonText}>Take</Text>
              </TouchableOpacity>
            </View>
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
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    right: 16,
    top: 16,
    zIndex: 1,
  },
  content: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#F3F4F6',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  pillEmoji: {
    fontSize: 30,
  },
  waveEmoji: {
    fontSize: 20,
  },
  greetingContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  reminderText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  medicineContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    width: '100%',
    marginBottom: 20,
  },
  medicineImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  medicineInfo: {
    flex: 1,
  },
  medicineName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  dosageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dosageText: {
    fontSize: 14,
    color: '#6B7280',
  },
  pillCount: {
    backgroundColor: '#10B981',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  pillCountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  skipButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    gap: 8,
  },
  skipButtonText: {
    color: '#6B7280',
    fontSize: 16,
    fontWeight: '600',
  },
  takeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#0EA5E9',
    gap: 8,
  },
  takeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});