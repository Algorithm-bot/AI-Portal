import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Flashcards = ({ navigation }) => {  
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.card, styles.card1]} 
        onPress={() => navigation.navigate('Screen1')}
      >
        <Text style={styles.cardText}>Chatbots</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.card, styles.card2]} 
        onPress={() => navigation.navigate('Screen2')}
      >
        <Text style={styles.cardText}>Image Generator AI</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.card, styles.card3]} 
        onPress={() => navigation.navigate('Screen3')}
      >
        <Text style={styles.cardText}>Video Generator AI</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.card, styles.card4]} 
        onPress={() => navigation.navigate('Screen4')}
      >
        <Text style={styles.cardText}>Speech Synthesis AI</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    width: '90%',
    height: 120,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  card1: {
    backgroundColor: '#ff8a80',
  },
  card2: {
    backgroundColor: '#80d8ff',
  },
  card3: {
    backgroundColor: '#a5d6a7',
  },
  card4: {
    backgroundColor: '#ffd180',
  },
  cardText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default Flashcards;
