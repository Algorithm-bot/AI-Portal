import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

const Screen3 = () => {
  const [selectedUrl, setSelectedUrl] = useState(null);

  // List of websites with URLs and image paths
  const websites = [
    { id: '1', url: 'https://invideo.io/', title: 'invideo', image: require('./assets/images/video/') },
    { id: '2', url: 'https://runwayml.com/', title: 'runway', image: require('./assets/images/video/') },
    { id: '3', url: 'https://app.leonardo.ai/?via=aixploria', title: 'Leonardo', image: require('./assets/images/video/') },
    { id: '4', url: 'https://www.krea.ai/apps/image/flux', title: 'Krea', image: require('./assets/images/video/') },
    { id: '5', url: 'https://creator.nightcafe.studio/', title: 'NightCafe', image: require('./assets/images/video/') },
    { id: '6', url: 'https://sketch.metademolab.com/canvas', title: 'AD', image: require('./assets/images/video/') },
    { id: '7', url: 'https://www.bluewillow.ai/', title: 'bluewillow', image: require('./assets/images/video/') },
    { id: '8', url: 'https://app.flair.ai/templates', title: 'Flair', image: require('./assets/images/video/') },
    { id: '9', url: 'https://clipdrop.co/text-to-image', title: 'Clipdrop', image: require('./assets/images/video/') },
    { id: '10', url: 'https://dreamstudio.ai/generate', title: 'DreamStudio', image: require('./assets/images/video/') },
    { id: '11', url: 'https://easy-peasy.ai/ai-images', title: 'EasyPeasy', image: require('./assets/images/video/') },
    { id: '12', url: 'https://tensor.art/', title: 'TensorArt', image: require('./assets/images/video/') },



    

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
