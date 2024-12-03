import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const Screen3 = ({navigation}) => {

  const websites = [
    {
      id: '1',
      title: 'invideo',
      image: require('./assets/images/video/invideo.png'),
      screen: 'Invideo',
  },
  {
      id: '2',
      title: 'runway',
      image: require('./assets/images/video/runway.webp'),
      screen: 'Runway',
  },
  {
      id: '3',
      title: 'KlingAI',
      image: require('./assets/images/video/kling.jpg'),
      screen: 'KlingAI',
  },
  {
      id: '4',
      title: 'HeyGenAI',
      image: require('./assets/images/video/HeyGen.jpg'),
      screen: 'HeyGenAI',
  },
  {
      id: '5',
      title: 'DeepbrainAI',
      image: require('./assets/images/video/DeepBrain.png'),
      screen: 'DeepbrainAI',
  },
  {
      id: '6',
      title: 'Colossyan',
      image: require('./assets/images/video/colossyan.png'),
      screen: 'Colossyan',
  },
  {
      id: '7',
      title: 'Pictory',
      image: require('./assets/images/video/pictory.png'),
      screen: 'Pictory',
  },
  {
      id: '8',
      title: 'Lumen5',
      image: require('./assets/images/video/lumen.png'),
      screen: 'Lumen5',
  },
  {
      id: '9',
      title: 'RenderForest',
      image: require('./assets/images/video/RenderForest.png'),
      screen: 'RenderForest',
  },
  {
      id: '10',
      title: 'Freepik',
      image: require('./assets/images/video/freepik.png'),
      screen: 'Freepik',
  },
  {
      id: '11',
      title: 'Canva',
      image: require('./assets/images/video/canva.png'),
      screen: 'Canva',
  },
  {
      id: '12',
      title: 'Veed',
      image: require('./assets/images/video/veed.png'),
      screen: 'Veed',
  },

  ];

 
  // Handle navigation when an item is clicked
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#252525' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 30 }}>
          {/* Title */}
          <Text
            style={{
              marginBottom: 20,
              fontSize: 23,
              fontFamily: 'MyFont',
              color: 'white',
            }}
          >
            Choose a Text-to-Video AI Bot
          </Text>

          {/* Grid layout for images */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              paddingHorizontal: 10,
              marginTop: 80, // Add space between top text and images
            }}
          >
            {websites.map((website) => (
              <TouchableOpacity
                key={website.id}
                onPress={() => handleNavigation(website.screen)} // Navigate to the target screen
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
    </View>
  );
};

export default Screen3;