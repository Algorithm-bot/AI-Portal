import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const Screen1 = ({ navigation }) => {
  // List of websites with images and navigation targets
  const websites = [
    {
      id: '1',
      title: 'ChatGPT',
      image: require('./assets/images/chatbots/chatgpt.jpg'),
      screen: 'ChatGPT',
    },
    {
      id: '2',
      title: 'Gemini',
      image: require('./assets/images/chatbots/gemini.jpeg'),
      screen: 'Gemini',
    },
    {
      id: '3',
      title: 'Claude',
      image: require('./assets/images/chatbots/claude.png'),
      screen: 'Claude',
    },
    {
      id: '4',
      title: 'Perplexity',
      image: require('./assets/images/chatbots/perplexity.jpg'),
      screen: 'Perplexity',
    },
    {
      id: '5',
      title: 'Copilot',
      image: require('./assets/images/chatbots/copilot.png'),
      screen: 'Copilot',
    },
    {
      id: '6',
      title: 'YOU',
      image: require('./assets/images/chatbots/you.jpg'),
      screen: 'YOU',
    },
    {
      id: '7',
      title: 'Chatsonic',
      image: require('./assets/images/chatbots/chatsonic.jpg'),
      screen: 'Chatsonic',
    },
    {
      id: '8',
      title: 'Cleverbot',
      image: require('./assets/images/chatbots/cleverbot.png'),
      screen: 'Cleverbot',
    },
    {
      id: '9',
      title: 'Jabberwacky',
      image: require('./assets/images/chatbots/jabberwacky.png'),
      screen: 'Jabberwacky',
    },
    {
      id: '10',
      title: 'Kuki',
      image: require('./assets/images/chatbots/kuki.webp'),
      screen: 'Kuki',
    },
    
    {
      id: '11',
      title: 'SimSimi',
      image: require('./assets/images/chatbots/simsimi.png'),
      screen: 'SimSimi',
    },
    {
      id: '12',
      title: 'Character',
      image: require('./assets/images/chatbots/character.png'),
      screen: 'Character',
    },
  ];
  

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Pick your AI Assistant</Text>
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

export default Screen1;