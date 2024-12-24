import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";

const Adobe = () => {
  const openSecureBrowser = async () => {
    const url =
      "https://firefly.adobe.com/inspire/images?ff_channel=adobe_com&ff_campaign=ffly_homepage&ff_source=firefly_seo";

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
          source={require("../assets/images/photo-generators/adobe_bg.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Description */}
        <Text style={styles.title}>Adobe Firefly: Creativity Unleashed by AI</Text>
        <Text style={styles.description}>
          Adobe Firefly is a generative AI tool developed by Adobe in March
          2023. It creates images, text effects, and designs from user
          prompts, integrating seamlessly with Adobe products like Photoshop.
          Firefly is popular among designers, marketers, and creatives for
          tasks like image generation, branding, and artistic effects.
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
    width: 240,
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

export default Adobe;
