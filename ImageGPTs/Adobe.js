import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { WebView } from "react-native-webview";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import Icon from MaterialIcons

const Adobe = ({ navigation }) => {
  const [showWebView, setShowWebView] = useState(false);

  const handleTryNow = () => {
    setShowWebView(true); // Show WebView when "Try Now" is pressed
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {showWebView ? (
        // WebView Screen
        <View style={{ flex: 1 }}>
          {/* Header with Go Back Button */}
          <View style={styles.header}>
            {/* Go Back Button with Icon */}
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.goBackButtonContainer}
            >
              <Icon name="arrow-back" size={30} color="white" />{" "}
              {/* Adjust icon size */}
            </TouchableOpacity>
          </View>

          {/* WebView */}
          <WebView
            source={{
              uri: "https://firefly.adobe.com/inspire/images?ff_channel=adobe_com&ff_campaign=ffly_homepage&ff_source=firefly_seo",
            }}
            style={{ flex: 1 }}
          />
        </View>
      ) : (
        // Description Screen
        <View style={styles.container}>
          {/* Go Back Button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.goBackButtonContainer}
          >
            <Icon name="arrow-back" size={25} color="white" />{" "}
            {/* Adjust icon size */}
            <Text style={styles.goBackText}>Go Back</Text>
          </TouchableOpacity>

          <Image
            source={require("../assets/images/photo-generators/adobe_bg.png")}
            style={styles.image}
            resizeMode="contain"
          />

          {/* Description */}
          <Text style={styles.title}>
            Adobe Firefly: Creativity Unleashed by AI
          </Text>
          <Text style={styles.description}>
            Adobe Firefly is a generative AI tool developed by Adobe in March
            2023. It creates images, text effects, and designs from user
            prompts, integrating seamlessly with Adobe products like Photoshop.
            Firefly is popular among designers, marketers, and creatives for
            tasks like image generation, branding, and artistic effects.
          </Text>

          {/* Try Now Button */}
          <TouchableOpacity onPress={handleTryNow} style={styles.tryNowButton}>
            <Text style={styles.tryNowButtonText}>TRY NOW</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000", // Black background for the header
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  goBackButtonContainer: {
    position: "absolute",
    top: 40,
    left: 35,
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  goBackText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10, // Add space between the icon and the text
  },
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
});

export default Adobe;
