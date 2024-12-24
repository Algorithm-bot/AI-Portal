import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";

const DeepbrainAI = () => {
  const handleTryNow = async () => {
    try {
      const result = await WebBrowser.openBrowserAsync("https://app.aistudios.com/dashboard");
      if (result.type !== "opened") {
        Alert.alert("Error", "Unable to open the link. Please try again.");
      }
    } catch (error) {
      Alert.alert("Error", "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <StatusBar barStyle="light-content" backgroundColor="#404040" />
      <View style={styles.container}>
        <Image
          source={require("../assets/images/video/DeepBrain.webp")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Description */}
        <Text style={styles.title}>
          DeepBrain AI: Empowering Content Creation with Advanced AI Avatars
        </Text>
        <Text style={styles.description}>
          DeepBrain AI, founded in 2016, is a South Korea-based company
          specializing in AI-powered virtual humans and video synthesis
          technology. DeepBrain AI's text-to-video feature converts written
          scripts into videos using realistic AI-generated avatars and
          voiceovers. It supports multiple languages, making it ideal for
          corporate training, e-learning, and marketing.
        </Text>

        {/* Try Now Button */}
        <TouchableOpacity onPress={handleTryNow} style={styles.tryNowButton}>
          <Text style={styles.tryNowButtonText}>TRY NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#000",
  },
  image: {
    width: 250,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
  },
  tryNowButton: {
    backgroundColor: "#00c853",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  tryNowButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default DeepbrainAI;
