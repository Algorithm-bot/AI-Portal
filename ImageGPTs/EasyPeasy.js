import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";

const EasyPeasy = () => {
  const handleTryNow = async () => {
    try {
      const result = await WebBrowser.openBrowserAsync("https://easy-peasy.ai/ai-images");
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
          source={require("../assets/images/photo-generators/EasyPeasy_bg.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Description */}
        <Text style={styles.title}>Easy Peasy: AI Design Simplified</Text>
        <Text style={styles.description}>
          EasyPeasy AI is a generative AI platform designed to simplify
          content creation, catering to tasks like writing, image generation,
          and brainstorming. Launched in 2023, it is ideal for marketers,
          entrepreneurs, and professionals seeking quick, high-quality
          outputs. With its user-friendly tools for blog writing, social media
          content, and visual design, EasyPeasy AI has gained popularity for
          helping users save time and effort in creating engaging content.
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
    height: 240,
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

export default EasyPeasy;
