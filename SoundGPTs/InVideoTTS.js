import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from "react-native";
import * as WebBrowser from "expo-web-browser";

const InVideoTTS = () => {
  const handleTryNow = async () => {
    // Open the URL in the device's default browser or in-app browser
    await WebBrowser.openBrowserAsync("https://invideo.io/tools/ai-text-to-speech/");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {/* Description Screen */}
      <View style={styles.container}>
        <Image
          source={require("../assets/images/video/invideo_bg.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Description */}
        <Text style={styles.title}>InVideo's Voice Revolution: Beyond Text</Text>
        <Text style={styles.description}>
          InVideo TTS is a text-to-speech feature integrated into InVideo's
          video editing platform, allowing users to convert written text into
          realistic voiceovers for their video projects. It offers a range of
          voices and languages, making it suitable for creating engaging
          videos, ads, tutorials, and social media content with minimal
          effort.
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
    width: 280,
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

export default InVideoTTS;
