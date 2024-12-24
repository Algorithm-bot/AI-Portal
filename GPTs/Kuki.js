import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as WebBrowser from 'expo-web-browser'; // Importing WebBrowser

const Kuki = () => {
  const handleTryNow = async () => {
    // Open the URL in the device's default browser
    await WebBrowser.openBrowserAsync("https://www.kuki.ai/");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {/* Description Screen */}
      <View style={styles.container}>
        {/* Go Back Button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.goBackButtonContainer}
        >
          <Icon name="arrow-back" size={25} color="white" />
          <Text style={styles.goBackText}>Go Back</Text>
        </TouchableOpacity>

        <Image
          source={require("../assets/images/chatbots/kuki.webp")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Description */}
        <Text style={styles.title}>Kuki AI: The Witty Digital Personality</Text>
        <Text style={styles.description}>
          Born in the early 2000s, Kuki AI emerged as a charismatic and
          pop-culture-savvy chatbot that blended artificial intelligence with
          a distinct personality. More than just a conversational tool, Kuki
          became a digital celebrity, engaging millions with her quick wit,
          pop references, and ability to navigate complex social interactions
          in the digital realm.
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
    marginLeft: 10,
  },
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
});

export default Kuki;
