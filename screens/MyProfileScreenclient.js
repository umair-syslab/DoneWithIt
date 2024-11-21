import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  ScrollView 
} from 'react-native';
import { 
  ChevronRight,
  Edit2,
  Plus,
  MessageSquare,
  FileText,
  Smartphone,
  RefreshCcw,
  Clock,
  Settings,
  Info,
  Home,
  Calendar,
  Wifi,
  User,
  ChevronDown,
  Truck
} from 'lucide-react-native';

const MenuItem = ({ icon: Icon, title, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.menuItemLeft}>
      <Icon size={24} color="#1F2937" />
      <Text style={styles.menuItemText}>{title}</Text>
    </View>
    <ChevronRight size={20} color="#9CA3AF" />
  </TouchableOpacity>
);

export default function MyProfileScreenclient() {
  const menuItems = [
    { icon: MessageSquare, title: 'Chat' },
    { icon: FileText, title: 'Prescriptions' },
    { icon: Smartphone, title: 'My Device' },
    { icon: RefreshCcw, title: 'Transactions' },
    { icon: Clock, title: 'History' },
    { icon: Settings, title: 'Settings' },
    { icon: Info, title: 'About vSARA' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <View style={styles.profileLeft}>
              <Image
                source={{ uri: 'https://i.pravatar.cc/100?img=8' }}
                style={styles.profileImage}
              />
              <View style={styles.profileInfo}>
                <View style={styles.nameContainer}>
                  <Text style={styles.name}>John Doe</Text>
                  <ChevronDown size={20} color="#1F2937" />
                </View>
                <Text style={styles.subtitle}>My Self</Text>
              </View>
            </View>
            <View style={styles.profileActions}>
              <TouchableOpacity style={styles.iconButton}>
                <Edit2 size={20} color="#1F2937" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Plus size={20} color="#1F2937" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.deliveryStatus}>
            <Truck size={20} color="#10B981" />
            <Text style={styles.deliveryText}>Delivering</Text>
            <Text style={styles.deliveryTime}>in 15min</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              onPress={() => console.log(`Pressed ${item.title}`)}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Home size={24} color="#6B7280" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Calendar size={24} color="#6B7280" />
          <Text style={styles.navText}>Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Wifi size={24} color="#6B7280" />
          <Text style={styles.navText}>IOT Devices</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <User size={24} color="#0EA5E9" />
          <Text style={[styles.navText, styles.navTextActive]}>Profile</Text>
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
  content: {
    flex: 1,
  },
  header: {
    padding: 16,
    gap: 16,
    marginTop:30
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  profileInfo: {
    gap: 4,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  profileActions: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    width: 30,
    height: 30,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveryStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'rgba(16, 185, 129, 0.1)',
    padding: 14,
    borderRadius: 12,
    gap: 8,
    marginTop:10,
    borderWidth: 1,
    borderColor: '#10B981', 
  },
  deliveryText: {
    fontSize: 16,
    color: '#000000',
    flex: 1,
  },
  deliveryTime: {
    fontSize: 14,
    color: '#000000',
  },
  menuContainer: {
    padding: 16,
    gap: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 8,
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
});