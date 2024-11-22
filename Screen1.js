import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

const Screen1 = ({ navigation }) => {
  const [selectedUrl, setSelectedUrl] = useState(null);

  // List of 3 website URLs
  const websites = [
    { id: '1', url: 'https://www.chatgpt.com', title: 'Chatgpt' },
    { id: '2', url: 'https://www.github.com', title: 'Gemini' },
    { id: '3', url: 'https://www.stackoverflow.com', title: 'Stack Overflow' },
  ];

  // Handle website selection
  const handleSelectWebsite = (url) => {
    setSelectedUrl(url);
  };

  return (
    <View style={{ flex: 1 }}>
      {selectedUrl ? (
        <WebView source={{ uri: selectedUrl }} style={{ flex: 1 }} />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         

          <Text style={{ marginTop: 20 }}>Select a chatbot to view:</Text>
          <FlatList
            data={websites}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelectWebsite(item.url)}>
                <Text style={{ padding: 10, fontSize: 18 }}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Screen1;
