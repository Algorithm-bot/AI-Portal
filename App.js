import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Flashcards from "./Flashcards"; // Import Flashcards component
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import ChatGPT from "./GPTs/ChatGPT";
import Gemini from "./GPTs/Gemini";
import Claude from "./GPTs/Claude";
import Perplexity from "./GPTs/Perplexity";
import Copilot from "./GPTs/Copilot";
import YOU from "./GPTs/YOU";
import Chatsonic from "./GPTs/Chatsonic";
import Cleverbot from "./GPTs/Cleverbot";
import Jabberwacky from "./GPTs/Jabberwacky";
import Kuki from "./GPTs/Kuki";
import SimSimi from "./GPTs/SimSimi";
import Character from "./GPTs/Character";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Flashcards">
        <Stack.Screen
          name="Flashcards"
          component={Flashcards}
          options={{ headerShown: false }} // Optional: Hide the header
        />
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ headerShown: false }} // Optional: Hide the header
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{ headerShown: false }} // Optional: Hide the header
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{ headerShown: false }} // Optional: Hide the header
        />
        <Stack.Screen
          name="Screen4"
          component={Screen4}
          options={{ headerShown: false }} // Optional: Hide the header
        />
        <Stack.Screen
          name="ChatGPT"
          component={ChatGPT}
          options={{ headerShown: false }} // Optional: Hide the header
        />

        <Stack.Screen
          name="Gemini"
          component={Gemini}
          options={{ headerShown: false }} // Optional: Hide the header
        />

        <Stack.Screen
          name="Claude"
          component={Claude}
          options={{ headerShown: false }} // Optional: Hide the header
        />

        <Stack.Screen
          name="Perplexity"
          component={Perplexity}
          options={{ headerShown: false }} // Optional: Hide the header
        />

        <Stack.Screen
          name="Copilot"
          component={Copilot}
          options={{ headerShown: false }} // Optional: Hide the header
        />

        <Stack.Screen
          name="YOU"
          component={YOU}
          options={{ headerShown: false }} // Optional: Hide the header
        />

        <Stack.Screen
          name="Chatsonic"
          component={Chatsonic}
          options={{ headerShown: false }} // Optional: Hide the header
        />

        <Stack.Screen
          name="Cleverbot"
          component={Cleverbot}
          options={{ headerShown: false }} // Optional: Hide the header
        />

        <Stack.Screen
          name="Jabberwacky"
          component={Jabberwacky}
          options={{ headerShown: false }} // Optional: Hide the header
        />

        <Stack.Screen
          name="Kuki"
          component={Kuki}
          options={{ headerShown: false }} // Optional: Hide the header
        />

        <Stack.Screen
          name="SimSimi"
          component={SimSimi}
          options={{ headerShown: false }} // Optional: Hide the header
        />

        <Stack.Screen
          name="Character"
          component={Character}
          options={{ headerShown: false }} // Optional: Hide the header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
