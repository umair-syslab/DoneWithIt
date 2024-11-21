import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  ScrollView,
  FlatList 
} from 'react-native';
import { ArrowLeft, ChevronDown } from 'lucide-react-native';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour <= 20; hour++) {
    for (let minute = 0; minute <= 30; minute += 30) {
      slots.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
    }
  }
  return slots;
};

const SelectDateTimeScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 1, 19)); // Feb 19, 2024
  const [selectedTime, setSelectedTime] = useState('11:30');

  const renderCalendarDay = ({ item }) => {
    const dayDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), item);
    const isSelected = dayDate.getDate() === selectedDate.getDate();
    const dayOfWeek = weekDays[dayDate.getDay()];

    return (
      <TouchableOpacity
        style={[styles.calendarDay, isSelected && styles.selectedDay]}
        onPress={() => setSelectedDate(dayDate)}
      >
        <Text style={[styles.calendarDayText, isSelected && styles.selectedDayText]}>{dayOfWeek}</Text>
        <Text style={[styles.calendarDateText, isSelected && styles.selectedDayText]}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const renderTimeSlot = ({ item }) => {
    const isSelected = item === selectedTime;
    return (
      <TouchableOpacity
        style={[styles.timeSlot, isSelected && styles.selectedTimeSlot]}
        onPress={() => setSelectedTime(item)}
      >
        <Text style={[styles.timeSlotText, isSelected && styles.selectedTimeSlotText]}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Date & Time</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.monthSelector}>
        <Text style={styles.monthText}>
          {months[selectedDate.getMonth()]}, {selectedDate.getFullYear()}
        </Text>
        <ChevronDown style={styles.aerowdown} size={24} color="#000" />
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Array.from({ length: 31 }, (_, i) => i + 1)}
        renderItem={renderCalendarDay}
        keyExtractor={(item) => item.toString()}
        style={styles.calendar}
      />

      <Text style={styles.sectionTitle}>Available Time</Text>

      <FlatList
        data={generateTimeSlots()}
        renderItem={renderTimeSlot}
        keyExtractor={(item) => item}
        numColumns={4}
        style={styles.timeGrid}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  monthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  monthText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  calendar: {
    maxHeight: 90,
    marginBottom: 20,
  },
  calendarDay: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 80,
    marginHorizontal: 4,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#414a4c', 
  },
  selectedDay: {
    backgroundColor: '#10B981',
  },
  aerowdown:{
    marginLeft: 90,
    position: 'absolute',
    left: 16, 
  },
  calendarDayText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  calendarDateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  selectedDayText: {
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginLeft: 16,
    marginBottom: 12,
  },
  timeGrid: {
    paddingHorizontal: 12,
  },
  timeSlot: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    margin: 4,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
  },
  selectedTimeSlot: {
    backgroundColor: '#10B981',
  },
  timeSlotText: {
    fontSize: 14,
    color: '#1F2937',
  },
  selectedTimeSlotText: {
    color: '#fff',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ffffff',
  },
  updateButton: {
    backgroundColor: '#0EA5E9',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    marginBottom:20
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SelectDateTimeScreen;