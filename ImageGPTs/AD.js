import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";

const AD = () => {
  const openSecureBrowser = async () => {
    const url = "https://sketch.metademolab.com/canvas";

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
          source={require("../assets/images/photo-generators/AD_bg.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Description */}
        <Text style={styles.title}>
          AD: Turning Doodles into Dancing Stars
        </Text>
        <Text style={styles.description}>
          Meta’s new AI, Animated Drawings, can transform your simple sketches
          into lively, moving characters. Just upload your drawing, and watch
          as the AI identifies limbs, adds motion, and brings your art to
          life—whether it’s walking, dancing, or jumping!
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
    width: 200,
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

export default AD;
