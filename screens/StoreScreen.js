import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  ScrollView,
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2; // 48 = padding (16) * 2 + gap between cards (16)

export default function StoreScreen() {
  const products = [
    {
      id: '1',
      name: 'Fingertip Oximeter',
      model: 'Mobile app',
      price: 110.00,
      rating: 4.5,
      image: 'https://s3-alpha-sig.figma.com/img/51f9/2d8a/f396a304dcf26a68c4734e7e6c2d889a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OHAWgCYyBXDUptpJla4y4moLN8pEGggRK8Mz0FZXb2gP2Q9Hrx7FOJ-Xf5ZXPLKe7yV0uIxOhsL6cFx2hWTjI6YEqCi-m-k3ECP7SMgbag~zo93WA4OiyS1Gr6~cCZix8sbKD5dNaHXjzJaWKjloErrpndjfjnBNX7Sbpp0XtPaWzSwOlagSSPGea83HAfIvIgWKGdf3UEW0EOQg~5W5Ijb3MFOuIFLECootWVn5vX5hCdaZ7ULOcZ7crzVAehhz~ihs8jI4SAf4In9DHTLbRt3wK7RWKE9srqPWvaR6jWvmx-mwWDeTHDMva~R51INZyzp~0KGZenq2n1nsO4VrBg__'
    },
    {
      id: '2',
      name: 'Blood Pressure',
      model: 'Mobile app',
      price: 145.00,
      rating: 4.5,
      image: 'https://s3-alpha-sig.figma.com/img/377c/921e/8429eb20fccd560e076444aeeb29f6f6?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ngKpSl6T7emXAkQRFwxEloYtuoiNs2cmEjPd9Qnq2PwPPe-Wn~UbNTNhVmpMu3gCl4gONxJ~TCuOS4xcdqNbt8WivFZYLVgIUCZIvk4NiSOi8tgpEp7N7Hf9NhbJgHl4puibOyEY2EXvghDK3d69a41dRM118WKPr4fw~oBNdhTRbDvYOa5NByjXyg9VUQnINw~JuqEZ3dBhVBwRnxR9oOR8F3f~S4IbPiG9QLDFuMOXy-~NTPMaF7JfDVpCdCeeDNTelHNvz6n6Nv16eAASkc6YDJoiirf6p-EJi-kSL3dpyziLPsO6WZw99eaYhKnqTHgim9w0ttxUX-8rnm3ViQ__'
    },
    {
      id: '3',
      name: 'Smart Scale',
      model: 'Mobile app',
      price: 150.00,
      rating: 4.5,
      image: 'https://s3-alpha-sig.figma.com/img/7df5/5e7d/332d4f3149c24e046e92f9dbe16484d5?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZpaHI3aLXIZ7aHUI8h4V-VedQiQpsfCNNzwGP40KAxyIcausb~aFzcZbzZIGeSiE6manZywyfQJ9cRkoLAO6ugerZPw2YL9lFHtfOxMf6AcAKSJ7iN1R-qzxQAzYaTDOQlm2kftiy34v21QKGnIc6E9Ao1VzFsZub9sEonosKnW4jn0t-Z~4F8pxIKvT5bON0v9AQzoWWU9lDI9tp85oMRf6EDGbpABJ~4gpBJ5vuXRki4ioltOTCWwjJBRDPEV3n5uTcXUwhoMTW-leFc6mhyh~LY6G9vMrw4pYdRmJpZMRUcN1~hC5kxdj4vKVFk0~hk0xBaIkAdL0VyzWTUj1wA__'
    }
  ];

  const ProductCard = ({ product }) => (
    <View style={styles.productCard}>
      <Image
        source={{ uri: product.image }}
        style={styles.productImage}
        resizeMode="contain"
      />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productModel}>{product.model}</Text>
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={14} color="#FCD34D" />
        <Text style={styles.ratingText}>{product.rating}</Text>
      </View>
      <View style={styles.priceRow}>
        <Text style={styles.priceText}>RM{product.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Store IOT Devices</Text>
        <TouchableOpacity style={styles.cartContainer}>
          <Ionicons name="cart-outline" size={24} color="#000" />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.productsGrid}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </View>
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    marginTop: 20,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
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
  content: {
    flex: 1,
    padding: 16,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  productCard: {
    width: CARD_WIDTH,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    // borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  productImage: {
    width: '100%',
    height: CARD_WIDTH - 24, // 24 = padding * 2
    marginBottom: 12,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  productModel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#1F2937',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  addButton: {
    backgroundColor: '#0EA5E9',
    width: 24,
    height: 24,
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});