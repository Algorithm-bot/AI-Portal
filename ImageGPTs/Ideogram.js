import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";

const Ideogram = () => {
  const openSecureBrowser = async () => {
    const url = "https://ideogram.ai/t/explore";

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
          source={require("../assets/images/photo-generators/Ideogram.jpg")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Description */}
        <Text style={styles.title}>
          Ideogram: AI Art's Creative Playground
        </Text>
        <Text style={styles.description}>
          The Ideogram text-to-image feature was developed by Ideogram AI, a
          company founded by former Google Brain researchers, in August
          2023. The Ideogram text-to-image feature creates images from written
          text, combining words and visuals creatively. It’s popular for
          making logos, posters, or artistic designs. Best suited for
          designers, marketers, and content creators.
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
    width: 250,
    height: 250,
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

export default Ideogram;
