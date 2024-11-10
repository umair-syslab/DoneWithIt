import React from 'react';
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
  Home, 
  Calendar, 
  MessageSquare, 
  User, 
  Bell, 
  MapPin, 
  Clock, 
  ChevronRight,
  Star
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MapView, { Marker, Polyline } from 'react-native-maps';

const { width } = Dimensions.get('window');



export default function HomeScreenDoctor() {
  const todayPatients= [
    {
      id: '1',
      name: 'Roesalian Raimond',
      condition: 'Hypertension',
      location: 'Tangerang Medical Centre',
      time: '08:00 am',
      image: 'https://i.pravatar.cc/100?img=1'
    },
    {
      id: '2',
      name: 'Roesalian Raimond',
      condition: 'Hypertension',
      location: 'Tangerang Medical Centre',
      time: '10:00 am',
      image: 'https://i.pravatar.cc/100?img=2'
    },
    {
      id: '3',
      name: 'Roesalian Raimond',
      condition: 'Hypertension',
      location: 'Tangerang Medical Centre',
      time: '02:00 pm',
      image: 'https://i.pravatar.cc/100?img=3'
    },
  ];

  const upcomingAppointments = [
    {
      id: '4',
      name: 'Roesalian Raimond',
      condition: 'Hypertension',
      location: 'Tangerang Medical Centre',
      time: '10:00 am',
      date: '11/10/2024',
      image: 'https://s3-alpha-sig.figma.com/img/0c87/de3a/fa6f2ba7ae45768c00e337fe1d20554e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jvL6DasIuui~n73DctejGpFXfApmon-WNNPwP8utu9NgElC549rJnWzic0oJ4t4jPDLezgnv6~plJBySCy2wcK4LW0RxsI7LCkIQOamjaISqhmiZoq-pxq8pmxP89svsyNcO~CPTmgdHQBysZ3-gcegYRgp-xRunL0XQGdKxtrndMSRhbxiATZrhxT0RQaDSF~T-hj7GtnUhZXrVijUNVJhwNXIg-1zFOL67HdMhIdEb81LW6LOrefIPRWaXHymffQSk9eOz8vOZTlcb9hWKPixgs3Y7gX-fhettaIy532QOyzsXjKaFbQKCojnkcExLcovg7HJMZKknDyDdK0Exxg__'
    },
    {
      id: '5',
      name: 'John',
      condition: 'Hypertension',
      location: 'Tangerang Medical Centre',
      time: '11:00 am',
      date: '11/20/2024',
      image: 'https://i.pravatar.cc/100?img=5'
    },
  ];

  const PatientCard = ({ patient }) => (
    <TouchableOpacity style={styles.patientCard}>
      <Image source={{ uri: patient.image }} style={styles.patientImage} />
      <View style={styles.patientInfo}>
        <Text style={styles.patientName}>{patient.name}</Text>
        <Text style={styles.patientCondition}>{patient.condition}</Text>
        <View style={styles.locationContainer}>
          <MapPin size={12} color="#6B7280" />
          <Text style={styles.locationText}>{patient.location}</Text>
        </View>
      </View>
      <Text style={styles.appointmentTime}>{patient.time}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/100?img=8' }}
            style={styles.doctorImage}
          />
          <View>
            <Text style={styles.doctorName}>Dr John Doe</Text>
            <View style={styles.locationContainer}>
              <MapPin size={12} color="#6B7280" />
              <Text style={styles.locationText}>Tangerang Medical Centre</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Bell size={24} color="#000" />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today Patients</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {todayPatients.map(patient => (
              <PatientCard key={patient.id} patient={patient} />
            ))}
          </ScrollView>
        </View>

        <TouchableOpacity>
          <LinearGradient
            colors={['#0EA5E9', '#38BDF8']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.deviceCard}
          >
            <View style={styles.deviceInfo}>
              <Text style={styles.deviceTitle}>Oximeter</Text>
              <Text style={styles.deviceSubtitle}>BP Monitor</Text>
              <View style={styles.ratingContainer}>
                <Star size={16} color="#FCD34D" fill="#FCD34D" />
                <Text style={styles.ratingText}>4.5</Text>
              </View>
              <TouchableOpacity style={styles.viewDetailsButton}>
                <Text style={styles.viewDetailsText}>View Details</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={{ uri: 'https://s3-alpha-sig.figma.com/img/f6ee/fb37/6a38b7a46452b2fa456380c152c63d6d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ocK2B8JwYcZcQtu60DscO8QMykEK6R6OwfIG4akj~JPYAweKlB6JLkdPfNL2pR9MJcT9AlKwH~dVFcoAnfiY8dQ1aLc0giPu4vE1gcXonCUUN0VsZ6qIwE6BoZAPOETH63r8l60CYV4i66ULOq0xt4WbiLPAQN1LPJcmgCj9~22qqjR~yefh1RjDQ37aZzAlqUIjqDCnsKqqzPvnxKQ6UINovp9zNHWvtEJVVtFanKCYWdE8lezk~g7A1QoGYanfIcYrz-97GhA2r1kbIF1wDqPE0P8qFePnKIa9KsNGOmrPLFsz43FBW7fHaXv6CkI0hpOVNhq6nYOEayvea~a66Q__' }}
              style={styles.deviceImage}
            />
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Track Next Patient</Text>
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
                title="Next Patient"
                description="Roesalian Raimond"
              />
              <Polyline
                coordinates={[
                  { latitude: 37.78825, longitude: -122.4324 },
                  { latitude: 37.79825, longitude: -122.4424 },
                ]}
                strokeColor="#0EA5E9"
                strokeWidth={3}
              />
            </MapView>
          </View>
          <View style={styles.nextPatientCard}>
            <View style={styles.nextPatientInfo}>
              <Image
                source={{ uri: 'https://i.pravatar.cc/100?img=6' }}
                style={styles.patientImage}
              />
              <View>
                <Text style={styles.patientName}>Roesalian Raimond</Text>
                <Text style={styles.patientCondition}>Hypertension</Text>
                <View style={styles.locationContainer}>
                  <MapPin size={12} color="#6B7280" />
                  <Text style={styles.locationText}>Tangerang Medical Centre</Text>
                </View>
              </View>
            </View>
            <View style={styles.timeContainer}>
              <Clock size={16} color="#6B7280" />
              <Text style={styles.timeText}>02:00 pm, in 15 minutes</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          {upcomingAppointments.map(appointment => (
            <TouchableOpacity key={appointment.id} style={styles.appointmentCard}>
              <View style={styles.appointmentInfo}>
                <Image
                  source={{ uri: appointment.image }}
                  style={styles.patientImage}
                />
                <View>
                  <Text style={styles.patientName}>{appointment.name}</Text>
                  <Text style={styles.patientCondition}>{appointment.condition}</Text>
                  <View style={styles.locationContainer}>
                    <MapPin size={12} color="#6B7280" />
                    <Text style={styles.locationText}>{appointment.location}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.appointmentTimeContainer}>
                <Text style={styles.appointmentDate}>{appointment.date}</Text>
                <Text style={styles.appointmentTime}>{appointment.time}</Text>
                <ChevronRight size={20} color="#6B7280" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Home size={24} color="#0EA5E9" />
          <Text style={[styles.navText, styles.navTextActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Calendar size={24} color="#6B7280" />
          <Text style={styles.navText}>Appointments</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop:20
  },
  headerLeft: {
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  notificationButton: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  seeAllText: {
    color: '#0EA5E9',
    fontSize: 14,
  },
  patientCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    width: width * 0.5,
  },
  patientImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 8,
  },
  patientInfo: {
    marginBottom: 8,
  },
  patientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  patientCondition: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  appointmentTime: {
    fontSize: 14,
    color: '#1F2937',
    fontWeight: '500',
  },
  deviceCard: {
    flexDirection: 'row',
    borderRadius: 16,
    padding: 16,
    margin: 16,
  },
  deviceInfo: {
    flex: 1,
  },
  deviceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  deviceSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  ratingText: {
    color: '#fff',
    marginLeft: 4,
  },
  viewDetailsButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  viewDetailsText: {
    color: '#0EA5E9',
    fontWeight: '600',
  },
  deviceImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  mapContainer: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 12,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  nextPatientCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  nextPatientInfo: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    marginLeft: 8,
    color: '#6B7280',
  },
  appointmentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    marginBottom: 8,
  },
  appointmentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appointmentTimeContainer: {
    alignItems: 'flex-end',
  },
  appointmentDate: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
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