import React, { useState } from 'react';
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
  ArrowLeft,
  Star,
  Users,
  ChevronRight
} from 'lucide-react-native';

export default function DoctorProfileScreen() {
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  const reviews = [
    {
      id: '1',
      name: 'John Doe',
      image: 'https://i.pravatar.cc/100?img=8',
      rating: 5,
      review: 'Their expertise and compassionate care made all the difference in my treatment. I felt listened to and understood throughout the entire process.'
    },
    {
      id: '2',
      name: 'Emilia',
      image: 'https://i.pravatar.cc/100?img=5',
      rating: 5,
      review: 'I felt listened to and understood throughout the entire process.'
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star 
        key={index}
        size={16}
        color="#FCD34D"
        fill={index < rating ? "#FCD34D" : "none"}
      />
    ));
  };

  const handleDecline = () => {
    console.log('Declined');
  };

  const handleAccept = () => {
    console.log('Accepted');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Doctor</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        {/* <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/300?img=5' }}
            style={styles.profileImage}
          />
          <Text style={styles.doctorName}>Dr. Alan Hathaway</Text>
          <Text style={styles.role}>Nurse</Text>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Rating</Text>
              <View style={styles.ratingContainer}>
                <Star size={16} color="#FCD34D" fill="#FCD34D" />
                <Text style={styles.rating}>4.8 out of 5</Text>
              </View>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Patient</Text>
              <View style={styles.patientContainer}>
                <Users size={16} color="#0EA5E9" />
                <Text style={styles.patientCount}>2000+</Text>
              </View>
            </View>
          </View>
        </View> */}
        <View style={styles.profileSection}>
  <View style={styles.profileHeader}>
    <Image
      source={{ uri: 'https://i.pravatar.cc/300?img=5' }}
      style={styles.profileImage}
    />
    <View style={styles.profileInfo}>
      <Text style={styles.doctorName}>Dr. Alan Hathaway</Text>
      <Text style={styles.role}>Nurse</Text>
      
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Rating</Text>
          <View style={styles.ratingContainer}>
            <Star size={16} color="#FCD34D" fill="#FCD34D" />
            <Text style={styles.rating}>4.8 out of 5</Text>
          </View>
        </View>              
      </View>
      <View style={styles.statItem}>
          <Text style={styles.statLabel}>Patient</Text>
          <View style={styles.patientContainer}>
            <Users size={16} color="#0EA5E9" />
            <Text style={styles.patientCount}>2000+</Text>
          </View>
          
        </View>
    </View>
  </View>
</View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Biography</Text>
          <Text 
            style={styles.biographyText}
            numberOfLines={isBioExpanded ? undefined : 3}
          >
            She is a compassionate healthcare professional known for her dedication to patient care and education. Her warmth and expertise make her a beloved figure in her community....
          </Text>
          <TouchableOpacity onPress={() => setIsBioExpanded(!isBioExpanded)}>
            <Text style={styles.readMoreText}>Read more</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.reviewsHeader}>
            <Text style={styles.sectionTitle}>Reviews</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          
          {/* {reviews.map(review => (
            <View key={review.id} style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <Image
                  source={{ uri: review.image }}
                  style={styles.reviewerImage}
                />
                <View style={styles.reviewerInfo}>
                  <Text style={styles.reviewerName}>{review.name}</Text>
                  <View style={styles.starsContainer}>
                    {renderStars(review.rating)}
                  </View>
                </View>
              </View>
              <Text style={styles.reviewText}>{review.review}</Text>
            </View>
          ))} */}
          {reviews.map(review => (
  <View key={review.id} style={styles.reviewCard}>
    <View style={styles.reviewHeader}>
      <Image
        source={{ uri: review.image }}
        style={styles.reviewerImage}
      />
      <View style={styles.reviewContent}>
        <Text style={styles.reviewerName}>{review.name}</Text>
        <Text style={styles.reviewText}>{review.review}</Text>
      </View>
      <View style={styles.starsContainer}>
        {renderStars(review.rating)}
      </View>
    </View>
  </View>
))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.price}>RM 360</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={styles.declineButton}
            onPress={handleDecline}
          >
            <Text style={styles.declineButtonText}>Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.acceptButton}
            onPress={handleAccept}
          >
            <Text style={styles.acceptButtonText}>Accept</Text>
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
    marginTop: 25
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  content: {
    flex: 1,
  },
//   profileSection: {
//     alignItems: 'center',
//     padding: 24,
//     gap: 8,
//   },
//   profileImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 12,
//     marginBottom: 8,
//   },
//   doctorName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#1F2937',
//   },
//   role: {
//     fontSize: 16,
//     color: '#6B7280',
//     marginBottom: 8,
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F3F4F6',
//     borderRadius: 12,
//     padding: 16,
//     width: '100%',
//   },
//   statItem: {
//     flex: 1,
//     alignItems: 'center',
//     gap: 4,
//   },
//   statDivider: {
//     width: 1,
//     height: 24,
//     backgroundColor: '#E5E7EB',
//   },
//   statLabel: {
//     fontSize: 14,
//     color: '#6B7280',
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 4,
//   },
//   rating: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#1F2937',
//   },
//   patientContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 4,
//   },
//   patientCount: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#0EA5E9',
//   },
profileSection: {
    padding: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    gap: 16,
  },
  profileImage: {
    width: 120,
    height: 160,
    borderRadius: 12,
  },
  profileInfo: {
    flex: 1,
    gap: 4,
  },
  doctorName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  role: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 24,
  },
  statItem: {
    gap: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  patientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  patientCount: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0EA5E9',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },
  biographyText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  readMoreText: {
    fontSize: 14,
    color: '#0EA5E9',
    marginTop: 4,
  },
  reviewsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  seeAllText: {
    fontSize: 14,
    color: '#0EA5E9',
  },
//   reviewCard: {
//     backgroundColor: '#F9FAFB',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 12,
//   },
//   reviewHeader: {
//     flexDirection: 'row',
//     marginBottom: 8,
//   },
//   reviewerImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 12,
//     marginRight: 12,
//   },
//   reviewerInfo: {
//     gap: 4,
//   },
//   reviewerName: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#1F2937',
//   },
//   starsContainer: {
//     flexDirection: 'row',
//     gap: 2,
//     // marginLeft:180
//   },
//   reviewText: {
//     fontSize: 14,
//     color: '#6B7280',
//     lineHeight: 20,
//   },
reviewCard: {
    // paddingVertical: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: '#E5E7EB',
        backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    gap: 12,
  },
  reviewerImage: {
    width: 48,
    height: 58,
    borderRadius: 12,
    marginTop:8
  },
  reviewContent: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 2,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  reviewText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  declineButton: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  declineButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6B7280',
  },
  acceptButton: {
    flex: 1,
    backgroundColor: '#0EA5E9',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  acceptButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});