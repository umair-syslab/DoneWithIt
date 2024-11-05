import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

export default function First() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Rectangle 2.png')}
        style={styles.backgroundImage}
      />
      <LinearGradient
        colors={['rgba(28, 36, 55, 0.7)', 'rgba(28, 36, 55, 0.9)']}
        style={styles.overlay}
      >
        <View style={styles.content}>
          <Image
            source={require('../assets/VSARA-icon 2.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>SARA</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: width,
    height: height,
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: 80, // Adjust this size if needed
    height: 80, // Adjust this size if needed
    resizeMode: 'contain',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
});