import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from "react-native";
import * as WebBrowser from "expo-web-browser";

const PlayHT = () => {
  const handleTryNow = async () => {
    // Open URL in the device's default browser or in-app browser
    await WebBrowser.openBrowserAsync("https://play.ht/");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {/* Description Screen */}
      <View style={styles.container}>
        <Image
          source={require("../assets/images/audio/playht2.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Description */}
        <Text style={styles.title}>PlayHT: Audio AI's New Frontier</Text>
        <Text style={styles.description}>
          PlayHT converts text into lifelike speech, offering a wide range of
          natural-sounding voices and languages. It allows users to create
          voiceovers for podcasts, audiobooks, presentations, and more, with
          options to customize tone, pitch, and speed. Launched in 2020, PlayHT
          has gained popularity among podcasters, content creators, and
          businesses for its high-quality, easy-to-use voice generation
          capabilities.
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

export default PlayHT;
