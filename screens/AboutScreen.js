import React from 'react';
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
import { LinearGradient } from 'expo-linear-gradient';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>Welcome to</Text>

        <LinearGradient
          colors={['#0EA5E9', '#38BDF8']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.logoCard}
        >
          <Image
            source={require('../assets/VSARA-Logo.png')}
            style={styles.logoImage}  // Use a new style for the image
          />
        </LinearGradient>

        <Text style={styles.paragraph}>
          At VSARA, we believe in transforming healthcare through connectivity and 
          innovation. We are a dedicated team of healthcare professionals, tech 
          enthusiasts, and visionaries committed to creating a seamless marketplace 
          for doctors, patients, and nurses. Our mission is to empower individuals 
          by providing access to quality healthcare services and advanced IoT devices.
        </Text>

        <Text style={styles.paragraph}>
          With a focus on collaboration and community, we strive to enhance the 
          patient experience, making healthcare more accessible and efficient. 
          Together, we are redefining the future of healthcare, one connection 
          at a time. Welcome to VSARA—where your health meets technology!
        </Text>
      </ScrollView>
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
    textAlign: 'center',
    marginBottom: 24,
  },
  logoCard: {
    borderRadius: 16,
    padding: 5,
    marginBottom: 24,
    alignItems: 'center',
  },
  logoImage: {  
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#374151',
    textAlign: 'center',
    marginBottom: 16,
  },
});
