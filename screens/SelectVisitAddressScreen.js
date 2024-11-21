import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  ScrollView 
} from 'react-native';
import { 
  ArrowLeft,
  MapPin,
  Plus,
  Pencil,
  Trash2
} from 'lucide-react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const SelectVisitAddressScreen = () => {
  const [addresses, setAddresses] = useState([
    {
      id: '1',
      type: 'Home',
      address: '10 Jalan Merdeka, Taman Sentosa, 50000 Kuala Lumpur, Malaysia',
      isSelected: true
    },
    {
      id: '2',
      type: 'Office',
      address: '45 Jalan Taman, Bungalow 12, 40000 Shah Alam, Selangor, Malaysia',
      isSelected: false
    }
  ]);

  const selectAddress = (id) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isSelected: addr.id === id
    })));
  };

  const renderRightActions = (id) => {
    return (
      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={[styles.actionButton, styles.editButton]}
          onPress={() => handleEdit(id)}
        >
          <Pencil size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.actionButton, styles.deleteButton]}
          onPress={() => handleDelete(id)}
        >
          <Trash2 size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  };

  const handleEdit = (id) => {
    // Implementation for edit action
    console.log('Edit address:', id);
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  const handleAddNewAddress = () => {
    // Implementation for adding new address
    console.log('Add new address');
  };

  const handleUpdate = () => {
    // Implementation for update action
    console.log('Update addresses');
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <ArrowLeft size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Select Visit Address</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView style={styles.content}>
          {addresses.map((address) => (
            <Swipeable
              key={address.id}
              renderRightActions={() => renderRightActions(address.id)}
              overshootRight={false}
            >
              <TouchableOpacity
                style={[
                  styles.addressCard,
                  address.isSelected && styles.addressCardSelected
                ]}
                onPress={() => selectAddress(address.id)}
              >
                <View style={styles.addressContent}>
                  <View style={[
                    styles.iconContainer,
                    address.isSelected && styles.iconContainerSelected
                  ]}>
                    <MapPin 
                      size={20} 
                      color={address.isSelected ? "#fff" : "#6B7280"} 
                    />
                  </View>
                  <View style={styles.addressDetails}>
                    <Text style={[
                      styles.addressType,
                      address.isSelected && styles.addressTypeSelected
                    ]}>
                      {address.type}
                    </Text>
                    <Text style={[
                      styles.addressText,
                      address.isSelected && styles.addressTextSelected
                    ]}>
                      {address.address}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Swipeable>
          ))}

          <TouchableOpacity 
            style={styles.addAddressButton}
            onPress={handleAddNewAddress}
          >
            <Plus size={20} color="#0EA5E9" />
            <Text style={styles.addAddressText}>Add New Address</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.updateButton}
            onPress={handleUpdate}
          >
            <Text style={styles.updateButtonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

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
    borderBottomColor: '#FFFFFF',
    marginTop:20
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  addressCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
  },
  addressCardSelected: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  addressContent: {
    flexDirection: 'row',
    padding: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconContainerSelected: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  addressDetails: {
    flex: 1,
  },
  addressType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  addressTypeSelected: {
    color: '#fff',
  },
  addressText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  addressTextSelected: {
    color: '#fff',
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
    justifyContent: 'space-between',
    
  },
  actionButton: {
    flex: 1,
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    marginHorizontal: 1
  },
  editButton: {
    backgroundColor: '#6B7280',
  },
  deleteButton: {
    backgroundColor: '#EF4444',
  },
  addAddressButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    marginTop: 20,
  },
  addAddressText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#0EA5E9',
    fontWeight: '500',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#FFFFFF',
    marginBottom: 30
  },
  updateButton: {
    backgroundColor: '#0EA5E9',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SelectVisitAddressScreen;