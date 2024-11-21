import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  ScrollView,
  Dimensions 
} from 'react-native';
import { 
  ArrowLeft,
  Clock,
  MessageSquare,
  Home,
  Calendar,
  User,
  Star
} from 'lucide-react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const { width } = Dimensions.get('window');

export default function CurrentAppointmentsPatientScreen() {
  const [activeTab, setActiveTab] = useState('current');
  const [selectedDate, setSelectedDate] = useState(19);

  const tabs = [
    { id: 'current', label: 'Current' },
    { id: 'requested', label: 'Requested' },
    { id: 'rejected', label: 'Rejected' }
  ];

  const dates = [
    { day: 18, weekDay: 'Mon' },
    { day: 19, weekDay: 'Tue' },
    { day: 20, weekDay: 'Wed' },
    { day: 21, weekDay: 'Thu' },
    { day: 22, weekDay: 'Fri' },
    { day: 23, weekDay: 'Sat' }
  ];

  const appointments = [
    {
      id: '1',
      patientName: 'Dr Arsalan',
      patientImage: 'https://i.pravatar.cc/100?img=3',
      location: 'Tangerang Medical Centre',
      time: '02:00 pm',
      timeInfo: 'in 15 minutes',
      rating: 4.8,
    },
    {
      id: '2',
      patientName: 'Dr Arsalan',
      patientImage: 'https://i.pravatar.cc/100?img=4',
      location: 'Tangerang Medical Centre',
      time: '02:00 pm',
      timeInfo: 'Tomorrow',
      rating: 4.8,
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Appointments</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
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

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.dateContainer}
        >
          {dates.map(date => (
            <TouchableOpacity
              key={date.day}
              style={[
                styles.dateItem,
                selectedDate === date.day && styles.selectedDateItem
              ]}
              onPress={() => setSelectedDate(date.day)}
            >
              <Text style={[
                styles.dateDay,
                selectedDate === date.day && styles.selectedDateText
              ]}>
                {date.day}
              </Text>
              <Text style={[
                styles.dateWeekDay,
                selectedDate === date.day && styles.selectedDateText
              ]}>
                {date.weekDay}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
              title="Start"
            />
            <Marker
              coordinate={{ latitude: 37.79825, longitude: -122.4424 }}
              title="End"
            />
            <Polyline
              coordinates={[
                { latitude: 37.78825, longitude: -122.4324 },
                { latitude: 37.79825, longitude: -122.4424 }
              ]}
              strokeColor="#0EA5E9"
              strokeWidth={3}
            />
          </MapView>
        </View>

        <View style={styles.appointmentsList}>
          {appointments.map(appointment => (
            <View key={appointment.id} style={styles.appointmentCard}>
              <View style={styles.appointmentInfo}>
                <Image
                  source={{ uri: appointment.patientImage }}
                  style={styles.patientImage}
                />
                <View style={styles.appointmentDetails}>
                  <Text style={styles.patientName}>{appointment.patientName}</Text>
                  {/* <View style={styles.locationContainer}>
                    <MapPin size={16} color="#6B7280" />
                    <Text style={styles.locationText}>{appointment.location}</Text>
                  </View> */}
                  <View style={styles.ratingContainer}>
                  <Star size={16} color="#FCD34D" fill="#FCD34D" />
                  <Text style={styles.ratingText}>
                    {appointment.rating} out of 5
                  </Text>
                </View>
                  <View style={styles.timeContainer}>
                    <Clock size={16} color="#6B7280" />
                    <Text style={styles.timeText}>
                      {appointment.time}, {appointment.timeInfo}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.chatButton}>
                  <MessageSquare size={20} color="#0EA5E9" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    marginTop:24
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  content: {
    flex: 1,
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
  dateContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  dateItem: {
    width: 60,
    height: 70,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  selectedDateItem: {
    backgroundColor: '#10B981',
  },
  dateDay: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  dateWeekDay: {
    fontSize: 14,
    color: '#6B7280',
  },
  selectedDateText: {
    color: '#fff',
  },
  // mapContainer: {
  //   height: 200,
  //   marginBottom: 16,
  //   width:360,
  //   marginLeft: 20,
  // },
  mapContainer: {
    height: 200,
    marginBottom: 16,
    width: 360,
    marginLeft: 20,
    borderRadius: 16, // Adjust this value for more or less rounding
    overflow: 'hidden', // Ensures that the content inside respects the border radius
  },
  map: {
    flex: 1,
  },
  appointmentsList: {
    padding: 16,
    gap: 12,
  },
  appointmentCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  appointmentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  patientImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  appointmentDetails: {
    flex: 1,
    gap: 4,
  },
  patientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
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
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timeText: {
    fontSize: 14,
    color: '#6B7280',
  },
  chatButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
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
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#6B7280',
  },
});