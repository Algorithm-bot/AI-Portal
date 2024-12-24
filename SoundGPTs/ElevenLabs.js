import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";

const ElevenLabs = () => {
  const handleTryNow = async () => {
    try {
      const result = await WebBrowser.openBrowserAsync(
        "https://elevenlabs.io/app/speech-synthesis/text-to-speech"
      );
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
          source={require("../assets/images/audio/elevenlabs.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Description */}
        <Text style={styles.title}>
          Beyond Robotic Voices: Eleven Labs Human-Like AI Sound
        </Text>
        <Text style={styles.description}>
          Founded in 2022, Eleven Labs offers a cutting-edge text-to-audio
          (speech synthesis) feature that converts text into high-quality,
          natural-sounding speech. It allows users to generate realistic
          voiceovers, audiobooks, and podcasts with customizable voices and
          tones, making it ideal for content creators, marketers, and
          educators.
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

export default ElevenLabs;
