import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Logo = () => (
  <View style={styles.logoContainer}>
    <Image
      source={require("../assets/VSARA.png")} // Replace 'logo.png' with your actual logo file name
      style={styles.logoImage}
    />
  </View>
);

export default function WelcomeScreen() {
  const navigation = useNavigation(); // Use navigation hook

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <View style={styles.content}>
        <Image
          source={require("../assets/Layer_1.png")}
          style={styles.illustration}
        />
        <View style={styles.dotContainer}>
          {[0, 1, 2].map((_, index) => (
            <View
              key={index}
              style={[styles.dot, index === 0 && styles.activeDot]}
            />
          ))}
        </View>
        <Text style={styles.title}>
          Manage your appointments & connect with patients.
        </Text>
        <Text style={styles.subtitle}>
          Stay connected with patients and streamline your practice with ease.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.getStartedButton}>
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text
          style={styles.signInText}
          onPress={() => navigation.navigate("CreateAccountScreen")}
        >
          Already have an account?{" "}
          <Text style={styles.signInLink}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  logoImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginRight: 5,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  illustration: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  dotContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#2DD4BF",
    width: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    color: "#6B7280",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30,
  },
  skipButton: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    flex: 1,
    marginRight: 10,
  },
  skipButtonText: {
    color: "#374151",
    fontWeight: "600",
    textAlign: "center",
  },
  getStartedButton: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#0EA5E9",
    flex: 1,
    marginLeft: 10,
  },
  getStartedButtonText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  signInText: {
    marginTop: 20,
    color: "#6B7280",
  },
  signInLink: {
    color: "#0EA5E9",
    fontWeight: "600",
  },
});
