import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from "react-native";
import { WebView } from "react-native-webview";

const Speechify = () => {
  const [showWebView, setShowWebView] = useState(false);

  const handleTryNow = () => {
    setShowWebView(true); // Show WebView when "Try Now" is pressed
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {showWebView ? (
        // WebView Screen
        <View style={{ flex: 1 }}>
          {/* Status Bar Background */}
          <View style={styles.statusBarBackground} />

          {/* WebView */}
          <WebView
            source={{
              uri: "https://speechify.com/",
            }}
            style={{ flex: 1 }}
          />
        </View>
      ) : (
        // Description Screen
        <View style={styles.container}>
          <Image
            source={require("../assets/images/audio/speechify.jpg")}
            style={styles.image}
            resizeMode="contain"
          />

          {/* Description */}
          <Text style={styles.title}>
            Text to Voice, Instantly: Speechify's Magic
          </Text>
          <Text style={styles.description}>
            Speechify is designed to turn text into high-quality,
            natural-sounding audio. It provides a variety of voices and
            languages, allowing for customization of pitch, speed, and tone.
            Ideal for users looking to convert articles, eBooks, and documents
            into audio format, it also supports a wide range of use cases, from
            personal productivity to educational applications. Speechify is
            popular among students, professionals, and those with learning
            disabilities.
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#000",
  },
  image: {
    width: 250,
    height: 170,
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

export default Speechify;
