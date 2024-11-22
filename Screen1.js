import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Screen 1!</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')} // Assuming you have Screen2 set up
      />
    </View>
  );
};

export default Screen1;
