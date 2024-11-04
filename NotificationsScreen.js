import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function NotificationsScreen() {
  const todayNotifications = [
    {
      id: '1',
      type: 'review',
      title: 'Give Review',
      description: 'Do you want to give review about Dr John Deo?',
      time: '1h',
      hasView: true
    },
    {
      id: '2',
      type: 'appointment',
      title: 'Appointment Success',
      description: 'Congratulations - Dr John Deo has accepted your appointment, pay fee and confirm your Appointment.',
      time: '1h',
      hasView: true
    },
    {
      id: '3',
      type: 'declined',
      title: 'Appointment Declined',
      description: 'Dr John Deo has Declined your Appointment.',
      time: '2h'
    }
  ];

  const yesterdayNotifications = [
    {
      id: '4',
      type: 'payment',
      title: 'Payment Success',
      description: 'Congratulations - Your fee is succesfully paid to Dr John Deo.',
      time: '1d'
    },
    {
      id: '5',
      type: 'reminder',
      title: 'Appointment Reminder',
      description: 'You have appointment with Dr John after an hour.',
      time: '1d'
    }
  ];

  const NotificationIcon = ({ type }) => {
    const iconProps = {
      size: 24,
      style: styles.icon
    };

    switch (type) {
      case 'review':
        return <Ionicons name="star" {...iconProps} color="#FCD34D" />;
      case 'appointment':
        return <Ionicons name="person" {...iconProps} color="#0EA5E9" />;
      case 'declined':
        return <Ionicons name="person" {...iconProps} color="#EF4444" />;
      case 'payment':
        return <Ionicons name="card" {...iconProps} color="#0EA5E9" />;
      case 'reminder':
        return <Ionicons name="time" {...iconProps} color="#0EA5E9" />;
      default:
        return null;
    }
  };

  const NotificationItem = ({ notification }) => (
    <View style={styles.notificationItem}>
      <View style={[
        styles.iconContainer,
        { backgroundColor: `${notification.type === 'review' ? '#FEF3C7' : 
          notification.type === 'declined' ? '#FEE2E2' : '#E0F2FE'}` }
      ]}>
        <NotificationIcon type={notification.type} />
      </View>
      <View style={styles.notificationContent}>
        <View style={styles.notificationHeader}>
          <Text style={styles.notificationTitle}>{notification.title}</Text>
          <Text style={styles.notificationTime}>{notification.time}</Text>
        </View>
        <Text style={styles.notificationDescription}>{notification.description}</Text>
        {notification.hasView && (
          <TouchableOpacity>
            <Text style={styles.viewButton}>view</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={styles.newBadge}>
          <Text style={styles.newBadgeText}>2 new</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>TODAY</Text>
        {todayNotifications.map(notification => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}

        <Text style={styles.sectionTitle}>YESTERDAY</Text>
        {yesterdayNotifications.map(notification => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    flex: 1,
  },
  newBadge: {
    backgroundColor: '#0EA5E9',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  newBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    width: 24,
    height: 24,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  notificationTime: {
    fontSize: 14,
    color: '#6B7280',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 4,
  },
  viewButton: {
    color: '#0EA5E9',
    fontSize: 14,
    fontWeight: '500',
  },
});