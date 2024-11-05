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

export default function ProductDetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>SmartBP Monitor</Text>
          <TouchableOpacity style={styles.cartContainer}>
            <Ionicons name="cart-outline" size={24} color="#000" />
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/51f9/2d8a/f396a304dcf26a68c4734e7e6c2d889a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OHAWgCYyBXDUptpJla4y4moLN8pEGggRK8Mz0FZXb2gP2Q9Hrx7FOJ-Xf5ZXPLKe7yV0uIxOhsL6cFx2hWTjI6YEqCi-m-k3ECP7SMgbag~zo93WA4OiyS1Gr6~cCZix8sbKD5dNaHXjzJaWKjloErrpndjfjnBNX7Sbpp0XtPaWzSwOlagSSPGea83HAfIvIgWKGdf3UEW0EOQg~5W5Ijb3MFOuIFLECootWVn5vX5hCdaZ7ULOcZ7crzVAehhz~ihs8jI4SAf4In9DHTLbRt3wK7RWKE9srqPWvaR6jWvmx-mwWDeTHDMva~R51INZyzp~0KGZenq2n1nsO4VrBg__' }}
          style={styles.productImage}
          resizeMode="contain"
        />

        <View style={styles.productInfo}>
          <Text style={styles.productName}>Blood Pressure Monitor</Text>
          <Text style={styles.productFeatures}>Mobile App | Bluetooth | Rechargeable</Text>
          <Text style={styles.productPrice}>RM145.00</Text>

          <View style={styles.ratingContainer}>
            <View style={styles.starRating}>
              <Ionicons name="star" size={16} color="#FCD34D" />
              <Text style={styles.ratingText}>4.8 out of 5</Text>
            </View>
            <View style={styles.patientCount}>
              <Ionicons name="people" size={16} color="#6B7280" />
              <Text style={styles.patientCountText}>Patients Using 2000+</Text>
            </View>
          </View>

          <Text style={styles.description}>
            Check your blood pressure regularly for better health management. Use a reliable monitor, sit quietly for five minutes before measuring, and take readings at the same time each day.
            <TouchableOpacity>
              <Text style={styles.readMore}> Read more</Text>
            </TouchableOpacity>
          </Text>

          <View style={styles.reviewsSection}>
            <Text style={styles.reviewsTitle}>Reviews</Text>
            <View style={styles.reviewItem}>
              <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/6d1a/eeec/df6af49e9be16193a1afc09d4fb5a0d2?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e9eyzdtycA-zpWH41OLD8HfvOleqvfGdpQzmaHjZRms1iWqobuGv9aYfaf~2yyWct3p82ImydunVQb6n4anj9VexwE0VpZtNzGkBmCjsMFWJ70RbtmpUND7zar5vjd1DHqZuDKzCmNrNTMpIDcVPsvGevQNBgTQMwo1A3I8V2oMmm3VzUSjzJDiRNI2vK7z13FJBgqQKdqWQF0yMj1bgpa43QKfyTDZswBXK1jbiFu-K~JZByMjUCNd0IOKym5I5K8t9YjyX21ccMiGI-UzyoHxsgpYrRZ61365XqxBj7GNWE9-7nxTbEpXAyJLoiFIXZTZ0swTCI2VTtLvmSq72qw__' }}
                style={styles.reviewerAvatar}
              />
              <View style={styles.reviewContent}>
                <Text style={styles.reviewerName}>John Doe</Text>
                <View style={styles.starRating}>
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <Ionicons key={index} name="star" size={16} color="#FCD34D" />
                  ))}
                </View>
                <Text style={styles.reviewText}>
                  Easy to use and very accurate! The digital display makes it simple to read. Highly recommend for home monitoring!
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    marginTop:25,
    
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartContainer: {
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#0EA5E9',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#FFFFFF',
  },
  productInfo: {
    padding: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productFeatures: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    
  },
  starRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#1F2937',
  },
  patientCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  patientCountText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#6B7280',
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    marginBottom: 16,
  },
  readMore: {
    color: '#0EA5E9',
    fontWeight: '600',
  },
  reviewsSection: {
    marginTop: 16,
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  reviewItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  reviewerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  reviewContent: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  reviewText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
  addToCartButton: {
    backgroundColor: '#0EA5E9',
    padding: 16,
    borderRadius: 20,
    margin: 16,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});