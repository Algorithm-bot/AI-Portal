import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Flashcards = ({ navigation }) => {  // Receive navigation prop
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.card} 
        onPress={() => navigation.navigate('Screen1')}
      >
        <Text style={styles.cardText}>Chatbots</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.card} 
        onPress={() => navigation.navigate('Screen2')}
      >
        <Text style={styles.cardText}>Image Generators</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.card} 
        onPress={() => navigation.navigate('Screen3')}
      >
        <Text style={styles.cardText}>Video Generators</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.card} 
        onPress={() => navigation.navigate('Screen4')}
      >
        <Text style={styles.cardText}>Predictive Analysis</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 200,
    height: 100,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9c2ff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Flashcards;
