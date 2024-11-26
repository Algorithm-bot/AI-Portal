import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

const Screen3 = () => {
  const [selectedUrl, setSelectedUrl] = useState(null);

  // List of websites with URLs and image paths
  //1 and 2 are video ai
  const websites = [
    { id: '1', url: 'https://invideo.io/', title: 'invideo', image: require('./assets/images/video/invideo.png') },
    { id: '2', url: 'https://runwayml.com/', title: 'runway', image: require('./assets/images/video/runway.webp') },
    { id: '3', url: 'https://www.klingai.com/', title: 'KlingAI', image: require('./assets/images/video/kling.jpg') },
    { id: '4', url: 'https://app.heygen.com/home', title: 'HeyGenAI', image: require('./assets/images/video/HeyGen.jpg') },
    { id: '5', url: 'https://app.aistudios.com/dashboard', title: 'DeepbrainAI', image: require('./assets/images/video/DeepBrain.png') },
    { id: '6', url: 'https://www.colossyan.com/', title: 'Colossyan', image: require('./assets/images/video/colossyan.png') },
    { id: '7', url: 'https://app.pictory.ai/signup', title: 'Pictory', image: require('./assets/images/video/pictory.png') },
    { id: '8', url: 'https://lumen5.com/', title: 'lumen5', image: require('./assets/images/video/lumen.png') },
    { id: '9', url: 'https://www.renderforest.com/ai-video-generator', title: 'RenderForest', image: require('./assets/images/video/RenderForest.png') },
    { id: '10', url: 'https://www.freepik.com/ai/video-generator', title:'Freepik', image: require('./assets/images/video/freepik.png') },
    { id: '11', url: 'https://www.canva.com/features/ai-video-generator/', title: 'Canva', image: require('./assets/images/video/canva.png') },
    { id: '12', url: 'https://www.veed.io/tools/ai-video', title: 'Veed', image: require('./assets/images/video/veed.png') },



    

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
            <Text style={{ marginBottom: 20, fontSize: 23, fontFamily: 'MyFont', color: 'white' }}>
            Choose a Text-to-Image AI Bot
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

export default Screen3;