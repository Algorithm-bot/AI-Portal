import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const Screen4 = ({navigation}) => {

  const websites = [
    {
      id: '1',
      title: 'Talkie',
      image: require('./assets/images/audio/talkie.jpg'),
      screen: 'Talkie',
  },
  {
      id: '2',
      title: 'ElevenLabs',
      image: require('./assets/images/audio/elevenlabs.png'),
      screen: 'ElevenLabs',
  },
  {
      id: '3',
      title: 'DesiVocal',
      image: require('./assets/images/audio/desivocal2.png'),
      screen: 'DesiVocal',
  },
  {
      id: '4',
      title: 'TTS',//openAI
      image: require('./assets/images/audio/tts.png'),
      screen: 'TTS',
  },
  {
      id: '5',
      title: 'NaturalReader',
      image: require('./assets/images/audio/naturalreader.png'),
      screen: 'NaturalReader',
  },
  {
      id: '6',
      title: 'VoiceMaker',
      image: require('./assets/images/audio/voicemaker.webp'),
      screen: 'VoiceMaker',
  },
  {
      id: '7',
      title: 'MurfAI',
      image: require('./assets/images/audio/murfAI.png'),
      screen: 'MurfAI',
  },
  {
      id: '8',
      title: 'PlayHT',
      image: require('./assets/images/audio/playht2.png'),
      screen: 'PlayHT',
  },
  {
      id: '9',
      title: 'Speechify',
      image: require('./assets/images/audio/speechify.jpg'),
      screen: 'Speechify',
  },
  {
      id: '10',
      title: 'InVideoTTS',
      image: require('./assets/images/video/invideo.png'),
      screen: 'InVideoTTS',
  },
  {
      id: '11',
      title: 'CanvaTTS',
      image: require('./assets/images/video/canva.png'),
      screen: 'CanvaTTS',
  },
  {
      id: '12',
      title: 'Narakeet',
      image: require('./assets/images/audio/narakeet2.png'),
      screen: 'Narakeet',
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

export default Screen4;