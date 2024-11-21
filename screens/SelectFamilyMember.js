import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SelectFamilyMember() {
  const [selectedProfile, setSelectedProfile] = useState('1');

  const profiles = [
    {
      id: '1',
      name: 'John Doe',
      relation: '',
      image: 'https://s3-alpha-sig.figma.com/img/42a4/eddc/469b996b135f347a5e1e17aa69ff9ad6?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qN~Z33Ay3k-GNj-mXaMWA1rv3qTu2F~F5cT7v8ODGFKBc9pKyYwAw2D1oX1HGkPr9EhGIXYjvB2zQ2CaTrkhBfPKVbHr1EiWqb9aCQMd~S38Xuzt~u5T6m1ZEA1qHH3cB12zO8gbOZOgXKcOwcwSKMVrqsrsuedHL3r6wGnXhPW6cHBSS1ojq5fBG2osaO2ta0PLtb~WTS9I1pafbp4z7fM2JxzPm791DGCvrEggHCWdqtSU-fT4awz62Q0V0~Oy-qwGQXDv~qmLEzIB6pE5rR7bkI4Ks9sArKGKMW0TesEFnC4bv7rJ-BBYgxiiSSJ2O7w9cfO9fEolzfo2nyzxFQ__'
    },
    {
      id: '2',
      name: 'Emma John',
      relation: 'Daughter',
      image: 'https://s3-alpha-sig.figma.com/img/0f7d/a8b8/1f992e2468aafc8de3a2866aae2f7ee9?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O6Z6bpRmaaoRMSYRlUSbtsdiEbq7ED1UAXPzfmND6~8w~sZlZQ7HHgeKMZp85cy2pY6pqbMSQNdBy7UVLt8lw51a1Lo3Wv4~VSFdR1rQ2pGwELzrQDfIci4~AWPX~JapLa6CQw28CW00VJSyr5yAfosaHHA2Ew0nuauXsWwXo8vqNXqlR5ZgUMxsXbpfKvU9tkHYUfAJuVssc~r9J-ktXxPAa797~JfiT4-6MPGNlGBfl2LbGLV37KTLHck~q4D2HMhnA~8fF8SWS0nuRLinBPsxgnUK6U~7PwGcIYnFqm8gVQNBM17NdnY7TYvLqDfelKMDpDcQEJcYi1PkS-2ZQg__'
    },
    {
      id: '3',
      name: 'Oliver John',
      relation: 'Daughter',
      image: 'https://s3-alpha-sig.figma.com/img/40ad/d983/de77bf6add46c12d04767c2f078c2c63?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kVoA2ZNczCmEVc~EeH8LFWns6U38y4Mg9lUKWVcMtuLd-7MGUz-HNTU~XQ6tMHj-h1v7MQdYigw8IBJsTAwVaENNLmlPMtViO7xWo-LizAbJZ--1mg3FkBisR7AwelPJ8cLQyhI~oFVAU4d~OuG~mb7ssuYc5EWEhF4sEITu5HWe5EZAie85zf4SpA2UE1t5KNa36tFSXm4Yz2L91ZtzGkARBU2xTpLUj2IRGcSRmzWib-kxycLes4Q~v7EDF6eIrcXrkH4y1llG--FkXWo89iiQUAwsflL4OGt0yZuqgetlARJWzRB~0PjKcht~KEvRyNyEJLDqKn-NfuoucPmyRg__'
    }
  ];

  const ProfileItem = ({ profile }) => {
    const isSelected = selectedProfile === profile.id;
    
    return (
      <TouchableOpacity
        style={[
          styles.profileItem,
          isSelected && styles.selectedProfileItem
        ]}
        onPress={() => setSelectedProfile(profile.id)}
      >
        <View style={styles.profileContent}>
          <Image
            source={{ uri: profile.image }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{profile.name}</Text>
            {profile.relation && (
              <Text style={styles.profileRelation}>{profile.relation}</Text>
            )}
          </View>
        </View>
        {isSelected && (
          <Ionicons name="checkmark-circle" size={24} color="#fff" />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Family Member</Text>
      </View>

      <View style={styles.content}>
        {profiles.map(profile => (
          <ProfileItem key={profile.id} profile={profile} />
        ))}

        <TouchableOpacity style={styles.addMemberButton}>
          <Text style={styles.addMemberText}>+ Add New Member</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="#6B7280" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="calendar-outline" size={24} color="#6B7280" />
          <Text style={styles.navText}>Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="hardware-chip-outline" size={24} color="#6B7280" />
          <Text style={styles.navText}>IOT Devices</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={24} color="#0EA5E9" />
          <Text style={[styles.navText, styles.navTextActive]}>Profile</Text>
        </TouchableOpacity>
      </View> */}
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
    borderBottomColor: '#ffffff',
    marginTop: 24
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 100,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  profileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  selectedProfileItem: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  profileInfo: {
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  selectedProfileItem: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  selectedProfileItem: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  profileRelation: {
    fontSize: 14,
    color: '#6B7280',
  },
  addMemberButton: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    marginTop: 30,
  },
  addMemberText: {
    fontSize: 16,
    color: '#0EA5E9',
    fontWeight: '600',
  },
  updateButton: {
    backgroundColor: '#0EA5E9',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    marginTop:200
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  navItem: {
    alignItems: 'center',
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