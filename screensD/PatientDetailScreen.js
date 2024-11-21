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
  ArrowLeft,
  MapPin,
  Clock,
  Pill,
  Laptop
} from 'lucide-react-native';

export default function PatientDetailScreen() {
  const [isNoteExpanded, setIsNoteExpanded] = useState(false);

  const conditions = ['Hypertension', 'Headache', 'Cardiac Pain'];
  
  const checkups = [
    {
      id: '1',
      time: '09:30 am, Yesterday',
      conditions: ['Hypertension', 'Headache', 'Hypertension'],
      medications: [
        {
          name: 'Nurofen Fiebersaft Erbeer 40 mg/ml',
          dosage: '150ml',
          quantity: 1
        },
        {
          name: 'Nurofen Fiebersaft Erbeer 40 mg/ml',
          dosage: '150ml',
          quantity: 1
        }
      ]
    },
    {
      id: '2',
      time: '09:30 am, Yesterday',
      conditions: ['Hypertension', 'Headache', 'Hypertension'],
      medications: [
        {
          name: 'Nurofen Fiebersaft Erbeer 40 mg/ml',
          dosage: '150ml',
          quantity: 1
        },
        {
          name: 'Nurofen Fiebersaft Erbeer 40 mg/ml',
          dosage: '150ml',
          quantity: 1
        }
      ]
    }
  ];

  const handleReject = () => {
    console.log('Reject');
  };

  const handleAddFee = () => {
    console.log('Add Fee');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Patient</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        {/* <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/300' }}
            style={styles.profileImage}
          />
          <Text style={styles.patientName}>Roesalian Raimond</Text>
          
          <View style={styles.conditionsContainer}>
            {conditions.map((condition, index) => (
              <View key={index} style={styles.conditionTag}>
                <Text style={styles.conditionText}>{condition}</Text>
              </View>
            ))}
          </View>

          <View style={styles.statusContainer}>
            <Clock size={16} color="#6B7280" />
            <Text style={styles.statusTitle}>Immediate</Text>
            <Text style={styles.statusSubtitle}>Estimated 45min waiting</Text>
          </View>

          <View style={styles.locationContainer}>
            <MapPin size={16} color="#6B7280" />
            <Text style={styles.locationText}>Tangerang Medical Centre</Text>
          </View>
        </View> */}
        <View style={styles.profileSection}>
  <View style={styles.profileHeader}>
    <Image
      source={{ uri: 'https://s3-alpha-sig.figma.com/img/51fb/3b5b/0c423f431e973462f167a024bb6c3624?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X7r3BW0bTtbzWLSS7OW~o-U5ecGlpVc6ojbgkMgfE55MS5gs844FE-qK15H5c0hd8mEJerXUnlGiGtZfKUXYi6l7kSGFz6AKrHIY2HW546K96vuryuQtWZCdjPu-JAzdprWN86iOhx9g89x2b9O2tr5eisZ-B5uc-TOonZ4P~1zVJ8-b1NqD0cPgOuyXB-mlmcmk-ZFOVpuReqwrFhtRoo8PeuaYL-TgwaW~UM7mEAU~IDlvKe4r01twnHceyQCX3NOFyDVsuucVPFvtrS7jzjX0und1xSQgeQBmpYzQc6Xp4eTMlfl4Uv1kQYAnHz-q~rOcRq6faqNcNc92OdR60g__' }}
      style={styles.profileImage}
    />
    <View style={styles.profileInfo}>
      <Text style={styles.patientName}>Roesalian Raimond</Text>
      <Text style={styles.ageInfo}>Brother / 15 years old</Text>
      <View style={styles.conditionsContainer}>
        <View style={styles.conditionTag}>
          <Text style={styles.conditionText}>Hypertension</Text>
        </View>
        <View style={styles.conditionTag}>
          <Text style={styles.conditionText}>Headache</Text>
        </View>
        <View style={styles.conditionTag}>
          <Text style={styles.conditionText}>Cardiac Pain</Text>
        </View>
      </View>
      <View style={styles.statusInfo}>
        <Clock size={16} color="#6B7280" />
        <Text style={styles.statusTitle}>Immediate</Text>
      </View>
      <Text style={styles.statusSubtitle}>Estimated 45min waiting</Text>
      
    </View>
  </View>
  <View style={styles.locationContainer}>
        <MapPin size={16} color="#0EA5E9" />
        <Text style={styles.locationText}>Tangerang Medical Centre</Text>
      </View>
</View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Note</Text>
          <Text style={styles.noteText} numberOfLines={isNoteExpanded ? undefined : 3}>
            Lorem ipsum dolor sit amet consectetur. Nunc purus sem aliquet nibh nam sit commodo gravida mauris. Ullamcorper vestibulum id dapibus vitae a.
          </Text>
          <TouchableOpacity onPress={() => setIsNoteExpanded(!isNoteExpanded)}>
            <Text style={styles.readMoreText}>Read more</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.iotDevicesButton}>
          <Laptop size={20} color="#1F2937" />
          <Text style={styles.iotDevicesText}>Connected IoT Devices</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Checkups History</Text>
          {checkups.map((checkup) => (
            <View key={checkup.id} style={styles.checkupCard}>
              <View style={styles.checkupHeader}>
                <View style={styles.timeContainer}>
                  <Clock size={16} color="#6B7280" />
                  <Text style={styles.timeText}>{checkup.time}</Text>
                </View>
                <View style={styles.checkupConditions}>
                  {checkup.conditions.map((condition, index) => (
                    <View key={index} style={styles.checkupConditionTag}>
                      <Text style={styles.checkupConditionText}>{condition}</Text>
                    </View>
                  ))}
                </View>
              </View>
              <View style={styles.medicationsContainer}>
                {checkup.medications.map((medication, index) => (
                  <View key={index} style={styles.medicationItem}>
                    <Pill size={20} color="#6B7280" />
                    <View style={styles.medicationDetails}>
                      <Text style={styles.medicationName}>{medication.name}</Text>
                      <View style={styles.dosageContainer}>
                        <Text style={styles.dosageText}>{medication.dosage}</Text>
                        <View style={styles.quantityTag}>
                          <Text style={styles.quantityText}>x{medication.quantity}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.rejectButton}
          onPress={handleReject}
        >
          <Text style={styles.rejectButtonText}>Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.addFeeButton}
          onPress={handleAddFee}
        >
          <Text style={styles.addFeeButtonText}>Add Fee</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    marginTop:25
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  content: {
    flex: 1,
  },
  profileSection: {
    padding: 16,
    gap: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    gap: 12,
  },
  profileImage: {
    width: 120,
    height: 210,
    borderRadius: 12,
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
    gap: 8,
  },
  patientName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 2,
  },
  ageInfo: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  conditionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  conditionTag: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  conditionText: {
    fontSize: 13,
    color: '#6B7280',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  statusInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  statusSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginLeft: 18
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  locationText: {
    fontSize: 13,
    color: '#6B7280',
  },
  // profileSection: {
  //   alignItems: 'center',
  //   padding: 16,
  //   gap: 12,
  // },
  // profileImage: {
  //   width: 120,
  //   height: 120,
  //   borderRadius: 60,
  // },
  // patientName: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   color: '#1F2937',
  // },
  // conditionsContainer: {
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   gap: 8,
  //   justifyContent: 'center',
  // },
  // conditionTag: {
  //   backgroundColor: '#F3F4F6',
  //   paddingVertical: 4,
  //   paddingHorizontal: 12,
  //   borderRadius: 16,
  // },
  // conditionText: {
  //   fontSize: 14,
  //   color: '#6B7280',
  // },
  // statusContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   gap: 8,
  // },
  // statusTitle: {
  //   fontSize: 16,
  //   fontWeight: '500',
  //   color: '#1F2937',
  // },
  // statusSubtitle: {
  //   fontSize: 14,
  //   color: '#6B7280',
  // },
  // locationContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   gap: 8,
  // },
  // locationText: {
  //   fontSize: 14,
  //   color: '#6B7280',
  // },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },
  noteText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  readMoreText: {
    fontSize: 14,
    color: '#0EA5E9',
    marginTop: 4,
  },
  // iotDevicesButton: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   gap: 8,
  //   backgroundColor: '#F0F9FF',
  //   marginHorizontal: 16,
  //   padding: 12,
  //   borderRadius: 8,
  // },
  iotDevicesButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#F0F9FF',
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 20,
    width: 200, // Set the desired width here
  },
  iotDevicesText: {
    fontSize: 12,
    color: '#1F2937',
    fontWeight: '500',

  },
  checkupCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 16,
    marginBottom: 12,
  },
  checkupHeader: {
    marginBottom: 16,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  timeText: {
    fontSize: 14,
    color: '#6B7280',
  },
  checkupConditions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  checkupConditionTag: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  checkupConditionText: {
    fontSize: 14,
    color: '#6B7280',
  },
  medicationsContainer: {
    gap: 12,
  },
  medicationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  medicationDetails: {
    flex: 1,
  },
  medicationName: {
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 4,
  },
  dosageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dosageText: {
    fontSize: 14,
    color: '#6B7280',
  },
  quantityTag: {
    backgroundColor: '#10B981',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 12,
  },
  quantityText: {
    fontSize: 12,
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  rejectButton: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderRadius: 20,
  },
  rejectButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6B7280',
  },
  addFeeButton: {
    flex: 1,
    backgroundColor: '#0EA5E9',
    padding: 16,
    borderRadius: 20,
    alignItems: 'center',
  },
  addFeeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});