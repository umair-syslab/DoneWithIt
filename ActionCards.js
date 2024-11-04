import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ActionCards() {
  const cards = [
    {
      id: '1',
      title: 'Track Location',
      subtitle: "Track upcoming Doctor's Location.",
      buttonText: 'Track Doctor',
      image: '/placeholder.svg?height=200&width=200',
      gradientColors: ['#0EA5E9', '#10B981']
    },
    {
      id: '2',
      title: 'Feeling Unwell?',
      subtitle: 'Book an appointment for doctor home visit.',
      buttonText: 'Book Appointment',
      image: 'https://s3-alpha-sig.figma.com/img/013c/5434/dc91f801921065f45f775d895eff9440?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cGW2vYpf7eFLpC9hMQBBFUo2XYHlyiAmd~i78t9W3lw2xA5CpSzPNBHYUnYRKbtbjKk81DKcrd8g2IBJ6nhAZC9EnSo8LgEytBL~Ej0n62bXYvwzBvwL2YIncaQU5V339ySskhw5FYb-n-~APQqJ9VHI58Ia-~kYsqIqEziUZk22HrFR9EJOQufk9boUP1rx18NvN9sv74M4kVLuViT2AW4IJ4fsgZp7pW7R6PuOuhwcbNjBk1YtheBYIk6WljPj5F39YI~~qoZ3cEIfg4V4N7O4SCDfR8ZDtvQ7YNnVrazzxG-cH5h6jGkPynidJGuYbYm-j8TydeCZtrLCwVeJAw__',
      gradientColors: ['#0EA5E9', '#0284C7']
    },
    {
      id: '3',
      title: 'Order Medicine',
      subtitle: 'Auto-Share Prescriptions with selected Delivery & Pickup.',
      buttonText: 'Order Now',
      image: 'https://s3-alpha-sig.figma.com/img/1a5e/5c65/930054fdbadac26b3a68f3e398966765?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NPjLb7zS5bfser15u5BWWQR7tBaoi9sGdJ3a5P6hTVcs7e8tLZd9moAtb-Ydi6ILWrRkXLMNOcwUUa6-drpq98LrwsUJuKkZ5RBHHB4kZImjA5LGoKTlw5gmEAYK7JRGDK-tTr7AX8LbXNbew~~gNDCNikDnbJ7e-yt8vgIl2rKHOximY8Ean6ADjIOCs-OMzsbXUKSmJdO~Fat3YxpWkrev0RS1388Y0-MJGaN2Z9M~t3PHhYmwtq~thgDvTRh92QR~9VjtE0DVhRVd--UfZlgyF95u3Y22su8dl7aB4TLEL8z77EfVCRVjVdbgV8oX6XEh-AhHIi9ARXL-yDEQaQ__',
      gradientColors: ['#0EA5E9', '#0284C7']
    },
    {
      id: '4',
      title: 'Certified Devices',
      subtitle: 'Auto-Share Prescriptions with selected Delivery & Pickup.',
      buttonText: 'Visit Store',
      image: 'https://s3-alpha-sig.figma.com/img/0613/e9f4/47e5bb298203cc6483f3fef1f3b42d25?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=REnjk~pD5Jals~1m4A7SkiU3mlkxCKSA81Tg0h4OttY-8FZ1XQFlVn-ps4pzjrODEPpI0KYmcpq9WOkE~ZhG0YEBbsiWgBy7fSYcjGv2KhhWjd0-eI5suPf04h3cT9VGJp8DSFkyikDA~uDKF8BWH8ImFYCcHUnhatAlOGSi6DhX-eiffTD0ZqZ0qkONMRwsQj8XYQaIrR8CnqsF2LSQp66kDaWT5UMhoD6bx-dD1ikIaGw~GrtmWyJS6oakE4LY~FomyNpQ~z9IYG~horZT59XYmNeAZmQsxgyOS8wgoNsrhOIAhj8vHqh3OyH0yZpuuC7MW3d22CRuzc0UdtO4SA__',
      gradientColors: ['#0EA5E9', '#0284C7']
    }
  ];

  const ActionCard = ({ card }) => (
    
  <View style={styles.shadowContainer}>
  <View style={styles.bottomShadow} />
  <LinearGradient
    colors={card.gradientColors}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.card}
  >
    <View style={styles.cardContent}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{card.title}</Text>
        <Text style={styles.subtitle}>{card.subtitle}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{card.buttonText}</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: card.image }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  </LinearGradient>
</View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.cardsContainer}>
        {cards.map(card => (
          <ActionCard key={card.id} card={card} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  cardsContainer: {
    padding: 16,
    gap: 16,
  },
  shadowContainer: {
    position: 'relative',
    borderRadius: 16,
    overflow: 'hidden',
  },
  bottomShadow: {
    position: 'absolute',
    bottom: -10,
    left: -20,
    right: -20,
    height: 30, // Adjust the height for a thicker shadow
    backgroundColor: '#000',
    borderRadius: 50,
    opacity: 0.1, // Adjust the opacity for desired shadow transparency
  },
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 16,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#0EA5E9',
    fontSize: 14,
    fontWeight: '600',
  },
  image: {
    width: 120,
    height: 120,
  },
});