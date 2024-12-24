import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";

const DesiVocal = () => {
  const handleTryNow = async () => {
    try {
      const result = await WebBrowser.openBrowserAsync("https://www.desivocal.com/");
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
          source={require("../assets/images/audio/desivocal2.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Description */}
        <Text style={styles.title}>
          AI Speaks Desi: Transforming Vocal Technology
        </Text>
        <Text style={styles.description}>
          DesiVocal is a text-to-speech (TTS) platform that converts written
          text into natural-sounding speech across multiple languages,
          including Hindi, Tamil, Telugu, Punjabi, Bengali, Marathi,
          Malayalam, Assamese, Kannada, Urdu, and Arabic. It offers
          high-definition AI voiceovers suitable for YouTubers, publishers,
          and media houses.
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
    height: 200,
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

export default DesiVocal;
