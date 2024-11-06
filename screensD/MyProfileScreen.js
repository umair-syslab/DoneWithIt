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
import { Ionicons } from '@expo/vector-icons';


export default function MyProfileScreen() {
  const menuItems = [
    { 
      id: '1', 
      icon: 'document-text-outline', 
      title: 'Documents',
      badge: 'Pending'
    },
    { 
      id: '2', 
      icon: 'swap-horizontal-outline', 
      title: 'Transactions' 
    },
    { 
      id: '3', 
      icon: 'time-outline', 
      title: 'History' 
    },
    { 
      id: '4', 
      icon: 'medical-outline', 
      title: 'Prescriptions' 
    },
    { 
      id: '5', 
      icon: 'information-circle-outline', 
      title: 'About vSARA' 
    },
    { 
      id: '6', 
      icon: 'settings-outline', 
      title: 'Settings' 
    },
    { 
      id: '7', 
      icon: 'log-out-outline', 
      title: 'Log out',
      color: '#EF4444'
    },
  ];

  const MenuItem = ({ item }) => (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuItemLeft}>
        <Ionicons 
          name={item.icon} 
          size={24} 
          color={item.color || '#1F2937'} 
        />
        <Text style={[styles.menuItemText, item.color && { color: item.color }]}>
          {item.title}
        </Text>
      </View>
      {item.badge ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.badge}</Text>
        </View>
      ) : (
        <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://s3-alpha-sig.figma.com/img/a36b/3e2e/9b8b40be01c2f5c8513acde14f4dcae1?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fIPJceWFNi42IjIEgyNOtEvlcoPLJdg1w73Ubgz1NtmmLZj8afU0r2Imc~XvDME1ipwvI5gDQR0hWcS9cIogYHGvOxQSqV1qvSzr48Hc7cVG~u9aPs9ZFnqv~9tXKBKIOkF0tu0CgDLcFtMg7FFJNHFiKh8Z7MIuIH2CvUaT9YMg-RvYb1DV7bnEIieuyTlbfTAStmSvgvyJ0mWfFBfnNrpGO9LCsmtpORNr-h5qLER5y7mZ~gZRry~kCnLZylpPQH3CmEvbzEui9WePt-8xI3xki-r47bZ33199ndo1t1Jkb3eHx1OFCvBriTu3bap5efumyIKN1stvM3dqdz9edA__' }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Dr John Doe</Text>
            <Text style={styles.specialty}>Heart Specialist</Text>
            <View style={styles.verificationBadge}>
              <Ionicons name="alert-circle" size={16} color="#EF4444" />
              <Text style={styles.verificationText}>Profile Not Verified</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="pencil" size={20} color="#0EA5E9" />
          </TouchableOpacity>
        </View>

        <View style={styles.menuList}>
          {menuItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="#6B7280" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="calendar-outline" size={24} color="#6B7280" />
          <Text style={styles.navText}>Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble-outline" size={24} color="#6B7280" />
          <Text style={styles.navText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Ionicons name="person" size={24} color="#0EA5E9" />
          <Text style={[styles.navText, styles.navTextActive]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    marginTop:20
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  specialty: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  verificationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  verificationText: {
    fontSize: 12,
    color: '#EF4444',
    // borderColor: '#EF4444', // Red border color
    // borderWidth: 1,         // Thickness of the border
    // padding: 4,             // Padding to keep the text from touching the border
    // borderRadius: 8,        // Rounded corners for a curled look
  },
  editButton: {
    width: 35,
    height: 35,
    borderRadius: 6,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuList: {
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
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
  badge: {
    backgroundColor: '#E0F2FE',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    color: '#0EA5E9',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: '#EDEDED',
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