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
  Home,
  Calendar,
  Laptop,
  User,
  MapPin,
  Star
} from 'lucide-react-native';

export default function RequestedAppointmentsScreen() {
  const [activeTab, setActiveTab] = useState('requested');

  const tabs = [
    { id: 'current', label: 'Current' },
    { id: 'requested', label: 'Requested' },
    { id: 'decline', label: 'Decline' }
  ];

  const appointments = [
    {
      id: '1',
      doctor: {
        name: 'Dr. Alan Hathaway',
        image: 'https://i.pravatar.cc/100?img=8',
        rating: 4.8,
        distance: '5 km away'
      },
      price: 'RM 360'
    },
    {
      id: '2',
      doctor: {
        name: 'Dr Arsalan',
        image: 'https://i.pravatar.cc/100?img=4',
        rating: 4.8,
        distance: '5 km away'
      },
      price: 'RM 360'
    }
  ];

  const handleDecline = (id) => {
    console.log('Decline appointment:', id);
  };

  const handleAccept = (id) => {
    console.log('Accept appointment:', id);
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
            <View style={styles.doctorInfo}>
              <Image
                source={{ uri: appointment.doctor.image }}
                style={styles.doctorImage}
              />
              <View style={styles.doctorDetails}>
                <Text style={styles.doctorName}>{appointment.doctor.name}</Text>
                <View style={styles.ratingContainer}>
                  <Star size={16} color="#FCD34D" fill="#FCD34D" />
                  <Text style={styles.ratingText}>
                    {appointment.doctor.rating} out of 5
                  </Text>
                </View>
                <View style={styles.distanceContainer}>
                  <MapPin size={14} color="#6B7280" />
                  <Text style={styles.distanceText}>
                    {appointment.doctor.distance}
                  </Text>
                </View>
              </View>
              <Text style={styles.priceText}>{appointment.price}</Text>
            </View>

            <View style={styles.actionButtons}>
              <TouchableOpacity 
                style={styles.declineButton}
                onPress={() => handleDecline(appointment.id)}
              >
                <Text style={styles.declineButtonText}>Decline</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.acceptButton}
                onPress={() => handleAccept(appointment.id)}
              >
                <Text style={styles.acceptButtonText}>Accept</Text>
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
          <Laptop size={24} color="#6B7280" />
          <Text style={styles.navText}>IOT Devices</Text>
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
    marginTop: 20 
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginLeft: 130
  },
  tabContainer: {
    flexDirection: 'row',
    // padding: 10,
    // gap: 8,
    backgroundColor: '#F3F4F6',
    marginRight: 18,
    marginLeft: 18,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
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
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  doctorInfo: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  doctorImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  doctorDetails: {
    flex: 1,
    gap: 4,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#6B7280',
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  distanceText: {
    fontSize: 14,
    color: '#6B7280',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  declineButton: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  declineButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    borderRadius: 12,

  },
  acceptButton: {
    flex: 1,
    backgroundColor: '#0EA5E9',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  acceptButtonText: {
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