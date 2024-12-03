import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

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

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Explore AI Image Creators</Text>
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

export default Screen2;