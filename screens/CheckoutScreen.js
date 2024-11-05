import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function CheckoutScreen() {
  const [quantity, setQuantity] = useState(1);
  const [deliveryMethod, setDeliveryMethod] = useState('deliver');
  const navigation = useNavigation();  // Use navigation hook


  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      <View style={styles.productCard}>
        <Image
          source={{ uri: 'https://example.com/blood-pressure-monitor.jpg' }}
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>Blood Pressure</Text>
          <Text style={styles.productPrice}>RM145</Text>
        </View>
        <View style={styles.quantityControl}>
          <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.addMoreButton}>
        <Text style={styles.addMoreText}>+ Add More</Text>
      </TouchableOpacity>

      <View style={styles.deliveryOptions}>
        <TouchableOpacity
          style={styles.deliveryOption}
          onPress={() => setDeliveryMethod('pickup')}
        >        
          <View style={[styles.radio, deliveryMethod === 'pickup' && styles.radioSelected]} />
          <View style={styles.deliveryOptionContent}>
            <Ionicons name="car-outline" size={24} color="#000" style={styles.deliveryIcon} />
            <View>
              <Text style={styles.deliveryOptionTitle}>Take Away Self Pickup</Text>
              <Text style={styles.deliveryOptionSubtitle}>Device is ready to pickup</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deliveryOption}
          onPress={() => setDeliveryMethod('deliver')}
        >
          <View style={[styles.radio, deliveryMethod === 'deliver' && styles.radioSelected]} />
          <View style={styles.deliveryOptionContent}>
            <Ionicons name="car-outline" size={24} color="#000" style={styles.deliveryIcon} />
            <View>
              <Text style={styles.deliveryOptionTitle}>Deliver to Home</Text>
              <Text style={styles.deliveryOptionSubtitle}>Device will delivered in 30min</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.payButton}
      onPress={() => navigation.navigate('WelcomeScreen')}>
      
        <Text style={styles.payButtonText}>Pay & Place Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#000',  // Placeholder for the actual image
  },
  productInfo: {
    flex: 1,
    marginLeft: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  addMoreButton: {
    marginBottom: 20,
    alignSelf: 'center', // Center the button horizontally
    color: '#000', // Black text color
  },
  addMoreText: {
    color: '#0EA5E9',
    fontSize: 16,
  },
  deliveryOptions: {
    marginBottom: 20,
  },
  deliveryOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    marginRight: 15,
  },
  radioSelected: {
    borderColor: '#0EA5E9',
    backgroundColor: '#0EA5E9',
  },
  deliveryOptionContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryIcon: {
    marginRight: 15,
  },
  deliveryOptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deliveryOptionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  payButton: {
    backgroundColor: '#0EA5E9',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginTop: 400,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});