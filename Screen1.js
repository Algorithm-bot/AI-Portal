import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

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
              fontSize: 25,
              fontFamily: 'MyFont',
              color: 'white',
            }}
          >
            Select a Chatbot
          </Text>

          {/* Grid layout for images */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              paddingHorizontal: 10,
              marginTop:80, //add space between top text and images
              
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

export default Screen1;
