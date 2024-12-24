import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from "react-native";
import * as WebBrowser from "expo-web-browser";

const Claude = () => {
  const handleTryNow = async () => {
    // Open the URL in the device's default browser or in-app browser
    await WebBrowser.openBrowserAsync("https://claude.ai/new");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {/* Description Screen */}
      <View style={styles.container}>
        <Image
          source={require("../assets/images/chatbots/claude.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Description */}
        <Text style={styles.title}>Claude: The AI Revolution's Brainy Sidekick</Text>
        <Text style={styles.description}>
          Claude AI, developed by Anthropic, is a smart assistant designed to
          help with writing, learning, and problem-solving. It can understand
          and respond to questions, assist with tasks like summarizing
          documents or brainstorming ideas, and even help write creative
          content. Claude AI is easy to use, making it a helpful tool for
          students, professionals, and anyone looking for quick and reliable
          assistance.
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
    width: 230,
    height: 230,
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
  statusBarBackground: {
    height: StatusBar.currentHeight || 20,
    backgroundColor: "#404040",
  },
});

export default Claude;
