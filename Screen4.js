import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

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

 
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Let AI Speak for You</Text>
        <View style={styles.grid}>
          {websites.map((website) => (
            <TouchableOpacity
              key={website.id}
              onPress={() => handleNavigation(website.screen)}
              style={styles.card}
            >
              <Image source={website.image} style={styles.cardImage} resizeMode="cover" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFD700', // Golden color for emphasis
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 1.2,
    marginBottom: 30,
    marginTop:25,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  card: {
    width: 150,
    height: 100,
    margin: 10,
    backgroundColor: '#444',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default Screen4;