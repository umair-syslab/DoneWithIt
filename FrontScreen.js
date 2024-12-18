import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function FrontScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://example.com/path-to-your-image.jpg' }}
        style={styles.backgroundImage}
      />
      <LinearGradient
        colors={['rgba(28, 36, 55, 0.7)', 'rgba(28, 36, 55, 0.9)']}
        style={styles.overlay}
      >
        <View style={styles.content}>
          <Image
            source={require('./assets/VSARA-icon 2.png')}
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
    width: 80, // Adjust as needed
    height: 80, // Adjust as needed
    resizeMode: 'contain',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
});
