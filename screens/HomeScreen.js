// import React from 'react';
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  ScrollView,
  Dimensions,
  Button
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MedicineReminderModal from '../Modals/MedicineReminderModal';

const ServiceCard = ({ imageSource, title, subtitle }) => (
    <TouchableOpacity style={styles.serviceCard}>
      <View style={styles.serviceIcon}>
        <Image source={imageSource} style={styles.serviceImage} />
      </View>
      <Text style={styles.serviceTitle}>{title}</Text>
      <Text style={styles.serviceSubtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );

const DeviceCard = ({ image, title, subtitle, rating }) => (
    <TouchableOpacity style={styles.deviceCard}>
      {typeof image === 'string' ? (
        <Image source={{ uri: image }} style={styles.deviceImage} />
      ) : (
        <Image source={image} style={styles.deviceImage} />
      )}
      <Text style={styles.deviceTitle}>{title}</Text>
      <Text style={styles.deviceSubtitle}>{subtitle}</Text>
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={16} color="#FCD34D" />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
    </TouchableOpacity>
  );

export default function HomeScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  // Optional: Show modal when screen loads
  useEffect(() => {
    setModalVisible(true); // Opens the modal when the home screen loads
  }, []);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSkip = () => {
    // Add skip action logic here
    setModalVisible(false);
  };

  const handleTake = () => {
    // Add take action logic here
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Button title="Show Reminder Modal" onPress={() => setModalVisible(true)} /> */}
      
        <MedicineReminderModal
          visible={isModalVisible}
          onClose={handleCloseModal}
          onSkip={handleSkip}
          onTake={handleTake}
        />
      </View>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image 
            source={require('../assets/Image Placeholder.png')}
              style={styles.profilePic} 
            />
            <View>
              <Text style={styles.userName}>John Doe</Text>
              <View style={styles.locationContainer}>
                <Ionicons name="location-outline" size={16} color="#6B7280" />
                <Text style={styles.location}>Tangerang Medical Centre</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerContent}>
            <View>
              <Text style={styles.bannerTitle}>Feeling Unwell?</Text>
              <Text style={styles.bannerSubtitle}>
                Book an appointment for 
              </Text>
              <Text style={styles.bannerSubtitle}>
                doctor home visit.
              </Text>
              <TouchableOpacity style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Book Appointment</Text>
              </TouchableOpacity>
            </View>
          
            <Image 
  source={require('../assets/asian-doctor-man-portrait-standing-with-smile-and-2022-10-19-04-10-25-utc 1.png')}
  style={styles.bannerImage} 
  resizeMode="contain"  // Options: "cover", "contain", "center"
 />
          </View>
        </View>
        <View style={styles.servicesContainer}>
          <ServiceCard
            imageSource={require('../assets/Frame.png')}
            title="Doctor"
            subtitle="Home Visit"
          />
          <ServiceCard
            imageSource={require('../assets/Frame (1).png')}            
            title="Nurse"
            subtitle="Home visit"
          />
          <ServiceCard
            imageSource={require('../assets/Frame (2).png')} 
            title="Pharmacies"
            subtitle="Deliver & Pickup"
          />
          <ServiceCard
            imageSource={require('../assets/Group.png')} 
            title="Store"
            subtitle="IOT Devices"
          />
        </View>

        {/* IOT Devices */}
        <View style={styles.devicesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>IOT Devices</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <DeviceCard
              image={require('../assets/Doctor 5.png')}
              title="Oximeter"
              subtitle="BP Monitor"
              rating={4.5}
            />
            <DeviceCard
              image={require('../assets/Image.png')}
              title="Blood Pressure"
              subtitle="BP Monitor"
              rating={4.5}
            />
            <DeviceCard
              image="https://s3-alpha-sig.figma.com/img/7df5/5e7d/332d4f3149c24e046e92f9dbe16484d5?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UvpMhPkXXD3EcSkR22iAvhflHCwWpu9HT2I3w0kNfCcaxzYQbCgVBap4XGOrj0ej-db7XFiWMIR-kF4tJAkYRMoMQtR8rYlJTriEg6ng4cPq6uZ9JOpXJum4fJJRg3-OxblHa-zb5zK0PzqGeeszxjOoNQjflqTF8jMzdGng8WcVn0A6WtyvhLzyvtz25r0-4PQ22xlIjnbYZW8U98JAqvYqr6bFYomGYX9t9AJ6ixTHokCdJkSFqfl9sd2aGqEpHi1s5tiyjqnfBmhD0oY1FD5L4cjz4INwwnTlsIiNnqC-OWQ3VhGWmiCvRDPUHNjnhfzbIkn2z5qTwKpae7ebMA__"
              title="Smart Scale"
              subtitle="Weight Monitor"
              rating={4.5}
            />
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#0EA5E9" />
          <Text style={[styles.navText, styles.navTextActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="calendar-outline" size={24} color="#6B7280" />
          <Text style={styles.navText}>Appointments</Text>
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
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    margin: 20,
    backgroundColor: '#0EA5E9',
    borderRadius: 16,
    overflow: 'hidden',
  },
  bannerContent: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  bannerSubtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 16,
  },
  bannerImage: {
    width: 150,
    height: 150,
  alignSelf: 'center', // centers the image within the view  
  },
  bookButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  bookButtonText: {
    color: '#0EA5E9',
    fontWeight: '600',
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  serviceCard: {
    alignItems: 'center',
    width: '23%',
  },
  serviceIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
    textAlign: 'center',
  },
  serviceSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  devicesSection: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
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
  deviceCard: {
    width: 160,
    marginRight: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
  },
  deviceImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  deviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  deviceSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: '#1F2937',
    marginLeft: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  navItem: {
    alignItems: 'center',
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