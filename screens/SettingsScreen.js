import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  Switch,
  Alert
} from 'react-native';
import { 
  ArrowLeft,
  Bell,
  Sun,
  LogOut
} from 'lucide-react-native';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const handleLogout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Log Out",
          onPress: () => console.log("User logged out"),
          style: "destructive"
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <TouchableOpacity 
            style={styles.menuItem}
            activeOpacity={0.7}
          >
            <View style={styles.menuItemLeft}>
              <Bell size={24} color="#1F2937" />
              <Text style={styles.menuItemText}>Notifications</Text>
            </View>
            <Switch
              trackColor={{ false: "#E5E7EB", true: "#10B981" }}
              thumbColor="#fff"
              ios_backgroundColor="#E5E7EB"
              onValueChange={setNotifications}
              value={notifications}
            />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            activeOpacity={0.7}
          >
            <View style={styles.menuItemLeft}>
              <Sun size={24} color="#1F2937" />
              <Text style={styles.menuItemText}>Light\Dark Mode</Text>
            </View>
            <Switch
              trackColor={{ false: "#E5E7EB", true: "#10B981" }}
              thumbColor="#fff"
              ios_backgroundColor="#E5E7EB"
              onValueChange={setDarkMode}
              value={darkMode}
            />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={handleLogout}
            activeOpacity={0.7}
          >
            <View style={styles.menuItemLeft}>
              <LogOut size={24} color="#EF4444" />
              <Text style={styles.logoutText}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
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
      marginTop: 25,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#1F2937',
    },
    content: {
      flex: 1,
      padding: 16,
    },
    section: {
      gap: 8,
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 16,
      paddingHorizontal: 16,
      backgroundColor: '#fff', // Set background to white
      borderRadius: 12,
      // Shadow properties
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3, // Add elevation for Android shadow
    },
    menuItemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    menuItemText: {
      fontSize: 16,
      color: '#1F2937',
    },
    logoutText: {
      fontSize: 16,
      color: '#EF4444',
    },
  });