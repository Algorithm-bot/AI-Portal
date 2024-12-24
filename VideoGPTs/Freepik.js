import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";

const Freepik = () => {
  const handleTryNow = async () => {
    try {
      const result = await WebBrowser.openBrowserAsync("https://www.freepik.com/ai/video-generator");
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
          source={require("../assets/images/video/freepik_bg.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Description */}
        <Text style={styles.title}>
          Freepik: A Global Hub for Creative Resources and Design Inspiration
        </Text>
        <Text style={styles.description}>
          Freepik, founded in 2010 in Málaga, Spain, is a leading platform
          offering a vast collection of graphic resources. Freepik’s
          text-to-video feature uses AI to generate videos from written text,
          combining visuals with relevant animations and effects. It provides both free
          and premium assets to enhance creative projects. As of 2022, Freepik
          was recognized in G2's Best Software Awards, ranking 17th in Europe,
          the Middle East, and Africa, and 43rd in the list of best design
          products.
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
  statusBarBackground: {
    height: StatusBar.currentHeight || 20,
    backgroundColor: "#404040", // Custom background color for the status bar
  },
});

export default Freepik;
