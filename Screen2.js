import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const Screen2 = ({ navigation }) => {
  // List of websites with URLs and image paths
  const websites = [
    {
        id: '1',
        title: 'Ideogram',
        image: require('./assets/images/photo-generators/Ideogram.jpg'),
        screen: 'Ideogram',
    },
    {
        id: '2',
        title: 'Adobe',
        image: require('./assets/images/photo-generators/adobe.jpg'),
        screen: 'Adobe',
    },
    {
        id: '3',
        title: 'Leonardo',
        image: require('./assets/images/photo-generators/leonardo.jpg'),
        screen: 'Leonardo',
    },
    {
        id: '4',
        title: 'Krea',
        image: require('./assets/images/photo-generators/krea.jpg'),
        screen: 'Krea',
    },
    {
        id: '5',
        title: 'NightCafe',
        image: require('./assets/images/photo-generators/NightCafe.png'),
        screen: 'NightCafe',
    },
    {
        id: '6',
        title: 'AD',
        image: require('./assets/images/photo-generators/AD.png'),
        screen: 'AD',
    },
    {
        id: '7',
        title: 'bluewillow',
        image: require('./assets/images/photo-generators/BlueWillow.jpg'),
        screen: 'bluewillow',
    },
    {
        id: '8',
        title: 'Flair',
        image: require('./assets/images/photo-generators/flair.png'), 
        screen: 'Flair',
    },

    {
      id:'9',
      title:'DreamStudio',
      image: require('./assets/images/photo-generators/DreamStudio.png'), 
      screen: 'DreamStudio'
    },

    {
      id:'10',
      title:'Clipdrop',
      image: require('./assets/images/photo-generators/clipdrop.jpg'),
      screen: 'Clipdrop' 
    },

    { 
      id: '11', 
      title: 'EasyPeasy', 
      image: require('./assets/images/photo-generators/EasyPeasy.png'), 
      screen: 'EasyPeasy' 
    },

    { 
      id: '12', 
      title: 'TensorArt', 
      image: require('./assets/images/photo-generators/TensorArt.jpg'), 
      screen: 'TensorArt' 
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
            Choose a Text-to-Image AI Bot
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

export default Screen2;
