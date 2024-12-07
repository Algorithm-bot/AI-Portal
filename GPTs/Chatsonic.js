import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import Icon from "react-native-vector-icons/MaterialIcons";

const Chatsonic = ({ navigation }) => {
  const [showWebView, setShowWebView] = useState(false);

  const handleTryNow = () => {
    setShowWebView(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#808080" }}>
      {showWebView ? (
        // WebView Screen
        <View style={{ flex: 1 }}>
          
          
          <View style={styles.statusBarBackground} />
          <WebView source={{ uri: "https://writesonic.com/chat" }} style={{ flex: 1 }} />
        </View>
      ) : (
        // Description Screen
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
            source={require("../assets/images/chatbots/chatsonic.jpg")}
            style={styles.image}
            resizeMode="contain"
          />

          {/* Description */}
          <Text style={styles.title}>Chatsonic: Your AI Creative Catalyst</Text>
          <Text style={styles.description}>
            ChatSonic is an AI-powered chatbot developed by Writesonic, designed
            to assist users with a variety of tasks such as generating content,
            answering questions, and brainstorming ideas. It uses advanced
            language models to provide human-like responses, making it useful
            for content creators, marketers, and anyone in need of quick,
            intelligent assistance. ChatSonic can help write blog posts, create
            social media captions, or even generate code.
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
  statusBarBackground: {
    height: StatusBar.currentHeight || 20, // Ensures a thin black bar at the top
    backgroundColor: "	#404040",
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
    width: 290,
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
});

export default Chatsonic;
