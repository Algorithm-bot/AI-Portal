import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";

const DreamStudio = () => {
  const openSecureBrowser = async () => {
    const url = "https://beta.dreamstudio.ai/generate";

    try {
      const result = await WebBrowser.openBrowserAsync(url);
      if (result.type !== "opened") {
        Alert.alert("Error", "Failed to open the browser. Please try again.");
      }
    } catch (error) {
      Alert.alert("Error", "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {/* Description Screen */}
      <View style={styles.container}>
        <Image
          source={require("../assets/images/photo-generators/DreamStudio.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Description */}
        <Text style={styles.title}>DreamStudio: AI Art's Creative Playground</Text>
        <Text style={styles.description}>
          DreamStudio AI, developed by Stability AI, is an advanced tool for
          generating images from text prompts using Stable Diffusion
          technology. Launched in 2022, it enables users to create highly
          detailed and customizable visuals. DreamStudio AI is popular among
          artists, designers, and creators for tasks like digital art,
          branding, and concept visualization.
        </Text>

        {/* Try Now Button */}
        <TouchableOpacity onPress={openSecureBrowser} style={styles.tryNowButton}>
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
    marginBottom: 10,
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
    backgroundColor: "#404040", // Custom background color for the status bar
  },
});

export default DreamStudio;
