import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { WebView } from "react-native-webview";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import Icon from MaterialIcons

const InVideo = ({ navigation }) => {
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
            source={{ uri: "https://invideo.io/" }}
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
            source={require("../assets/images/video/invideo_bg.png")}
            style={styles.image}
            resizeMode="contain"
          />

          {/* Description */}
          <Text style={styles.title}>
            InVideo: AI Video Creation Simplified
          </Text>
          <Text style={styles.description}>
            InVideo allows users to create videos by
            converting written scripts into engaging visual content. Developed
            by InVideo, it uses AI to pair text with relevant stock footage,
            animations, and music. Ideal for marketers, educators, and content
            creators, it simplifies video production for social media, ads, and
            presentations. Launched in 2022, it has become popular for its ease
            of use, saving time and effort in creating professional-looking
            videos.
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

export default InVideo;
