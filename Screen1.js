import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

const Screen1 = () => {
  const [selectedUrl, setSelectedUrl] = useState(null);

  // List of websites with URLs and image paths
  const websites = [
    { id: '1', url: 'https://www.chatgpt.com', title: 'ChatGPT', image: require('./assets/images/chatgpt.jpg') },
    { id: '2', url: 'https://gemini.google.com/app?hl=en-IN', title: 'Gemini', image: require('./assets/images/gemini.jpeg') },
    { id: '3', url: 'https://claude.ai/new', title: 'Claude', image: require('./assets/images/claude.png') },
    { id: '4', url: 'https://www.perplexity.ai/', title: 'Perplexity', image: require('./assets/images/perplexity.webp') },

  ];

  // Handle website selection
  const handleSelectWebsite = (url) => {
    setSelectedUrl(url);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#252525' }}>
      {selectedUrl ? (
        // Display WebView if a website is selected
        <WebView source={{ uri: selectedUrl }} style={{ flex: 1 }} />
      ) : (
        // Main layout for selection screen
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 30 }}>
          {/* Title */}
          <Text style={{ marginBottom: 20, fontSize: 25, fontFamily: 'MyFont', color: 'white' }}>
            Select a Chatbot
          </Text>



          {/* Layout for ChatGPT, Claude, and Gemini */}
          <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 20 }}>



            {/* Column for ChatGPT and Claude */}
            <View style={{ flex: 1 }}>
              {/* ChatGPT image */}
              <TouchableOpacity onPress={() => handleSelectWebsite(websites[0].url)} style={{ marginBottom: 0 }}>
                <Image
                  source={websites[0].image}
                  style={{ width: 150, height: 150, borderRadius: 10 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              {/* Claude image below ChatGPT */}
              <TouchableOpacity onPress={() => handleSelectWebsite(websites[2].url)}>
                <Image
                  source={websites[2].image}
                  style={{ width: 150, height: 150, borderRadius: 10 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            {/* Gemini image on the top right */}
            <TouchableOpacity
              onPress={() => handleSelectWebsite(websites[1].url)}
              style={{ flex: 1, alignItems: 'flex-end', marginTop: 0 }}>
              <Image
                source={websites[1].image}
                style={{ width: 150, height: 150, borderRadius: 10 }}
                resizeMode="contain"
              />
            </TouchableOpacity>

            
          </View>
        </View>
      )}
    </View>
  );
};

export default Screen1;
