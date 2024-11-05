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
import { Ionicons } from '@expo/vector-icons';



export default function AppointmentsScreen() {
  const [selectedDate, setSelectedDate] = useState(19);

  const dates = [
    { date: 18, day: 'Mon' },
    { date: 19, day: 'Tue' },
    { date: 20, day: 'Wed' },
    { date: 21, day: 'Thu' },
    { date: 22, day: 'Fri' },
    { date: 23, day: 'Sat' },
    { date: 24, day: 'Tue' },
    { date: 25, day: 'Wed' },
    { date: 26, day: 'Thu' },
    { date: 27, day: 'Fri' },
    { date: 28, day: 'Sat' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Appointments</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Date Picker */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.datePickerContainer}
        >
          {dates.map((item) => (
            <TouchableOpacity
              key={item.date}
              style={[
                styles.dateItem,
                selectedDate === item.date && styles.selectedDateItem
              ]}
              onPress={() => setSelectedDate(item.date)}
            >
              <Text
                style={[
                  styles.dateNumber,
                  selectedDate === item.date && styles.selectedDateText
                ]}
              >
                {item.date}
              </Text>
              <Text
                style={[
                  styles.dateDay,
                  selectedDate === item.date && styles.selectedDateText
                ]}
              >
                {item.day}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Appointment Card */}
        <View style={styles.appointmentCard}>
          <View style={styles.appointmentHeader}>
            <View style={styles.doctorInfo}>
              <Image
                source={{ uri: '/placeholder.svg?height=40&width=40' }}
                style={styles.doctorImage}
              />
              <View>
                <Text style={styles.doctorName}>Dr. Arslan</Text>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={16} color="#FCD34D" />
                  <Text style={styles.ratingText}>4.8 out of 5</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.payButton}>
              <Text style={styles.payButtonText}>Pay Fee</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.appointmentTime}>
            <Ionicons name="time-outline" size={20} color="#6B7280" />
            <Text style={styles.timeText}>09:30 am, Tomorrow</Text>
          </View>
        </View>

        {/* Warning Message */}
        <View style={styles.warningContainer}>
          <View style={styles.warningIcon}>
            <Ionicons name="warning" size={20} color="#F59E0B" />
          </View>
          <Text style={styles.warningText}>
            You have to pay fee to confirm your appointment.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="#6B7280" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Ionicons name="calendar" size={24} color="#0EA5E9" />
          <Text style={[styles.navText, styles.navTextActive]}>Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="hardware-chip-outline" size={24} color="#6B7280" />
          <Text style={styles.navText}>IOT Devices</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#6B7280" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    marginTop: 20
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  datePickerContainer: {
    padding: 16,
  },
  dateItem: {
    width: 45,
    height: 70,
    marginRight: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
  },
  selectedDateItem: {
    backgroundColor: '#10B981',
  },
  dateNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
  },
  dateDay: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  selectedDateText: {
    color: '#fff',
  },
  appointmentCard: {
    margin: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doctorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#6B7280',
  },
  payButton: {
    backgroundColor: '#0EA5E9',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  appointmentTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#6B7280',
  },
  warningContainer: {
    margin: 16,
    padding: 12,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  warningIcon: {
    marginRight: 12,
  },
  warningText: {
    flex: 1,
    fontSize: 14,
    color: '#92400E',
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
  },
  navItemActive: {
    color: '#0EA5E9',
  },
  navText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  navTextActive: {
    color: '#0EA5E9',
  },
});