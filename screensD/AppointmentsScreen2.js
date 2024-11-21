// import React, { useState } from 'react';
// import { 
//   View, 
//   Text, 
//   Image, 
//   TouchableOpacity, 
//   StyleSheet, 
//   SafeAreaView,
//   ScrollView 
// } from 'react-native';
// import { 
//   MapPin,
//   Home,
//   Calendar,
//   MessageSquare,
//   User
// } from 'lucide-react-native';

// export default function AppointmentsScreen2() {
//   const [activeTab, setActiveTab] = useState('requested');

//   const tabs = [
//     { id: 'current', label: 'Current' },
//     { id: 'requested', label: 'Requested' },
//     { id: 'rejected', label: 'Rejected' }
//   ];

//   const appointments = [
//     {
//       id: '1',
//       patientName: 'Roesalian Raimond',
//       patientImage: 'https://i.pravatar.cc/100?img=3',
//       conditions: ['Hypertension', 'Headache'],
//       location: 'Sun | Street 123, Block A, House 1'
//     }
//   ];

//   const handleReject = (appointmentId) => {
//     console.log('Reject appointment:', appointmentId);
//   };

//   const handleAddFee = (appointmentId) => {
//     console.log('Add fee for appointment:', appointmentId);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.tabContainer}>
//         {tabs.map(tab => (
//           <TouchableOpacity
//             key={tab.id}
//             style={[
//               styles.tab,
//               activeTab === tab.id && styles.activeTab
//             ]}
//             onPress={() => setActiveTab(tab.id)}
//           >
//             <Text style={[
//               styles.tabText,
//               activeTab === tab.id && styles.activeTabText
//             ]}>
//               {tab.label}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <ScrollView style={styles.content}>
//         {appointments.map(appointment => (
//           <View key={appointment.id} style={styles.appointmentCard}>
//             <View style={styles.patientInfo}>
//               <Image
//                 source={{ uri: appointment.patientImage }}
//                 style={styles.patientImage}
//               />
//               <View style={styles.patientDetails}>
//                 <Text style={styles.patientName}>{appointment.patientName}</Text>
//                 <View style={styles.conditionsContainer}>
//                   {appointment.conditions.map((condition, index) => (
//                     <View key={index} style={styles.conditionTag}>
//                       <Text style={styles.conditionText}>{condition}</Text>
//                     </View>
//                   ))}
//                 </View>
//               </View>
//             </View>

//             <View style={styles.locationContainer}>
//               <MapPin size={16} color="#6B7280" />
//               <Text style={styles.locationText}>{appointment.location}</Text>
//             </View>

//             <View style={styles.actionButtons}>
//               <TouchableOpacity 
//                 style={styles.rejectButton}
//                 onPress={() => handleReject(appointment.id)}
//               >
//                 <Text style={styles.rejectButtonText}>Reject</Text>
//               </TouchableOpacity>
//               <TouchableOpacity 
//                 style={styles.addFeeButton}
//                 onPress={() => handleAddFee(appointment.id)}
//               >
//                 <Text style={styles.addFeeButtonText}>Add Fee</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         ))}
//       </ScrollView>

//       <View style={styles.bottomNav}>
//         <TouchableOpacity style={styles.navItem}>
//           <Home size={24} color="#6B7280" />
//           <Text style={styles.navText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
//           <Calendar size={24} color="#0EA5E9" />
//           <Text style={[styles.navText, styles.navTextActive]}>Appointments</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <MessageSquare size={24} color="#6B7280" />
//           <Text style={styles.navText}>Chats</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <User size={24} color="#6B7280" />
//           <Text style={styles.navText}>Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     padding: 16,
//     gap: 8,
//   },
//   tab: {
//     flex: 1,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//     backgroundColor: '#F3F4F6',
//     alignItems: 'center',
//   },
//   activeTab: {
//     backgroundColor: '#10B981',
//   },
//   tabText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#6B7280',
//   },
//   activeTabText: {
//     color: '#fff',
//   },
//   content: {
//     flex: 1,
//     padding: 16,
//   },
//   appointmentCard: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 16,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     gap: 12,
//   },
//   patientInfo: {
//     flexDirection: 'row',
//     gap: 12,
//   },
//   patientImage: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//   },
//   patientDetails: {
//     flex: 1,
//     gap: 4,
//   },
//   patientName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#1F2937',
//   },
//   conditionsContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
//   conditionTag: {
//     backgroundColor: '#F3F4F6',
//     paddingVertical: 4,
//     paddingHorizontal: 8,
//     borderRadius: 4,
//   },
//   conditionText: {
//     fontSize: 12,
//     color: '#6B7280',
//   },
//   locationContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 4,
//   },
//   locationText: {
//     fontSize: 14,
//     color: '#6B7280',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//     gap: 12,
//   },
//   rejectButton: {
//     flex: 1,
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//     backgroundColor: '#F3F4F6',
//     alignItems: 'center',
//   },
//   rejectButtonText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#6B7280',
//   },
//   addFeeButton: {
//     flex: 1,
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//     backgroundColor: '#0EA5E9',
//     alignItems: 'center',
//   },
//   addFeeButtonText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#fff',
//   },
//   bottomNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 12,
//     borderTopWidth: 1,
//     borderTopColor: '#E5E7EB',
//     backgroundColor: '#fff',
//   },
//   navItem: {
//     alignItems: 'center',
//     gap: 4,
//   },
//   navItemActive: {
//     color: '#0EA5E9',
//   },
//   navText: {
//     fontSize: 12,
//     color: '#6B7280',
//   },
//   navTextActive: {
//     color: '#0EA5E9',
//   },
// });

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

export default function AppointmentsScreen2() {
  const [activeTab, setActiveTab] = useState('requested');

  const tabs = [
    { id: 'current', label: 'Current' },
    { id: 'requested', label: 'Requested' },
    { id: 'rejected', label: 'Rejected' }
  ];

  const appointments = [
    {
      id: '1',
      patientName: 'Roesalian Raimond',
      patientImage: 'https://i.pravatar.cc/100?img=3',
      conditions: ['Hypertension', 'Headache'],
      location: 'Sun | Street 123, Block A, House 1'
    }
  ];

  const handleReject = (appointmentId) => {
    console.log('Reject appointment:', appointmentId);
  };

  const handleAddFee = (appointmentId) => {
    console.log('Add fee for appointment:', appointmentId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Appointments</Text>
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
        {appointments.map(appointment => (
          <View key={appointment.id} style={styles.appointmentCard}>
            <View style={styles.patientInfo}>
              <Image
                source={{ uri: appointment.patientImage }}
                style={styles.patientImage}
              />
              <View style={styles.patientDetails}>
                <Text style={styles.patientName}>{appointment.patientName}</Text>
                <View style={styles.conditionsContainer}>
                  {appointment.conditions.map((condition, index) => (
                    <View key={index} style={styles.conditionTag}>
                      <Text style={styles.conditionText}>{condition}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>

            <View style={styles.locationContainer}>
              <MapPin size={16} color="#6B7280" />
              <Text style={styles.locationText}>{appointment.location}</Text>
            </View>

            <View style={styles.actionButtons}>
              <TouchableOpacity 
                style={styles.rejectButton}
                onPress={() => handleReject(appointment.id)}
              >
                <Text style={styles.rejectButtonText}>Reject</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.addFeeButton}
                onPress={() => handleAddFee(appointment.id)}
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
    fontSize: 14,
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
  appointmentCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    gap: 12,
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
  conditionsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  conditionTag: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  conditionText: {
    fontSize: 12,
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
  rejectButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
  },
  rejectButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  addFeeButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
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