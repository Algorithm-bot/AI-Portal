import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

const Screen1 = () => {
  const [selectedUrl, setSelectedUrl] = useState(null);

  // List of websites with URLs and image paths
  const websites = [
    { id: '1', url: 'https://www.chatgpt.com', title: 'ChatGPT', image: require('./assets/images/chatgpt.jpg') },
    { id: '2', url: 'https://gemini.google.com/app?hl=en-IN', title: 'Gemini', image: require('./assets/images/gemini.jpeg') },
    { id: '3', url: 'https://claude.ai/new', title: 'Claude', image: require('./assets/images/claude.png') },
    { id: '4', url: 'https://www.perplexity.ai/', title: 'Perplexity', image: require('./assets/images/perplexity.jpg') },
    { id: '5', url: 'https://copilot.microsoft.com/', title: 'Copilot', image: require('./assets/images/copilot.png') },
    { id: '6', url: 'https://you.com/', title: 'YOU', image: require('./assets/images/you.jpg') },
    { id: '7', url: 'https://writesonic.com/chat', title: 'Writesonic', image: require('./assets/images/chatsonic.jpg') },
    { id: '8', url: 'https://www.cleverbot.com/', title: 'Cleverbot', image: require('./assets/images/cleverbot.png') },
    { id: '9', url: 'http://www.jabberwacky.com/', title: 'Jabberwacky', image: require('./assets/images/jabberwacky.png') },
    { id: '10', url: 'https://www.kuki.ai/', title: 'Kuki', image: require('./assets/images/kuki.webp') },
    { id: '11', url: 'https://o.simsimi.com/', title: 'SimSimi', image: require('./assets/images/simsimi.png') },
    { id: '12', url: 'https://character.ai/', title: 'Character', image: require('./assets/images/character.png') },

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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, alignItems: 'center', paddingTop: 30 }}>
            {/* Title */}
            <Text style={{ marginBottom: 20, fontSize: 25, fontFamily: 'MyFont', color: 'white' }}>
              Select a Chatbot
            </Text>

            {/* Grid layout for images */}
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                paddingHorizontal: 10,
              }}
            >
              {websites.map((website) => (
                <TouchableOpacity
                  key={website.id}
                  onPress={() => handleSelectWebsite(website.url)}
                  style={{
                    width: 150,
                    height: 100,
                    margin: 10,
                    backgroundColor: '#444',
                    borderRadius: 10,
                  }}
                >
                  <Image
                    source={website.image}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 10,
                    }}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Screen1;
