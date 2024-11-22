import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Flashcards from './Flashcards'; // Import Flashcards component
import Screen1 from './Screen1'; // Import Screen1
import Screen2 from './Screen2'; // Import Screen1
import Screen3 from './Screen3'; // Import Screen1
import Screen4 from './Screen4'; // Import Screen1


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Flashcards">
        <Stack.Screen name="Flashcards" component={Flashcards} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component ={Screen2}/>
        <Stack.Screen name="Screen3" component={Screen3}/>
        <Stack.Screen name="Screen4" component={Screen4}/>
   
      </Stack.Navigator>
    </NavigationContainer>
  );
}
