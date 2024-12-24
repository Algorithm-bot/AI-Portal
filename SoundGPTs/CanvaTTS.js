import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from "react-native";
import * as WebBrowser from "expo-web-browser";

const CanvaTTS = () => {
  const handleTryNow = async () => {
    // Open the URL in the device's default browser or in-app browser
    await WebBrowser.openBrowserAsync("https://www.canva.com/features/ai-voice-generator/");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {/* Description Screen */}
      <View style={styles.container}>
        <Image
          source={require("../assets/images/video/canva_bg.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Description */}
        <Text style={styles.title}>AI Narration: Canva's Audio Design</Text>
        <Text style={styles.description}>
          Canva TTS is a text-to-speech feature within Canva’s design platform
          that allows users to convert written text into natural-sounding
          voiceovers. It offers a variety of voices and languages, enabling
          easy integration of speech into presentations, videos, and social
          media content. Introduced as part of Canva’s broad suite of tools,
          Canva TTS is particularly popular among content creators, marketers,
          and educators for its accessibility and simplicity.
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
    width: 240,
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

export default CanvaTTS;
