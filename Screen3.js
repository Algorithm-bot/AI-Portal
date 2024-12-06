import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const Screen3 = ({navigation}) => {

  const websites = [
    {
      id: '1',
      title: 'InVideo',
      image: require('./assets/images/video/invideo.png'),
      screen: 'InVideo',
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

 
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Bring Your Words to Life!</Text>
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

export default Screen3;