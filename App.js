import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Flashcards from "./Flashcards";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";

//Below are GPTs
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

//Below are ImageGPTs
import Ideogram from "./ImageGPTs/Ideogram";
import Adobe from "./ImageGPTs/Adobe";
import Leonardo from "./ImageGPTs/Leonardo";
import Krea from "./ImageGPTs/Krea";
import NightCafe from "./ImageGPTs/NightCafe";
import AD from "./ImageGPTs/AD";
import bluewillow from "./ImageGPTs/bluewillow";
import Flair from "./ImageGPTs/Flair";
import DreamStudio from "./ImageGPTs/DreamStudio";
import Clipdrop from "./ImageGPTs/Clipdrop";
import EasyPeasy from "./ImageGPTs/EasyPeasy";
import TensorArt from "./ImageGPTs/TensorArt";
import Runway from "./VideoGPTs/Runway";

//Below are VideoGPTs
import InVideo from "./VideoGPTs/InVideo";
import KlingAI from "./VideoGPTs/KlingAI";
import HeyGenAI from "./VideoGPTs/HeyGenAI";
import DeepbrainAI from "./VideoGPTs/DeepbrainAI";
import Colossyan from "./VideoGPTs/Colossyan";
import Pictory from "./VideoGPTs/Pictory";
import Lumen5 from "./VideoGPTs/Lumen5";
import RenderForest from "./VideoGPTs/RenderForest";
import Freepik from "./VideoGPTs/Freepik";
import Canva from "./VideoGPTs/Canva";
import Veed from "./VideoGPTs/Veed";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Flashcards">
        <Stack.Screen
          name="Flashcards"
          component={Flashcards}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen4"
          component={Screen4}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ChatGPT"
          component={ChatGPT}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Gemini"
          component={Gemini}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Claude"
          component={Claude}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Perplexity"
          component={Perplexity}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Copilot"
          component={Copilot}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="YOU"
          component={YOU}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Chatsonic"
          component={Chatsonic}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Cleverbot"
          component={Cleverbot}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Jabberwacky"
          component={Jabberwacky}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Kuki"
          component={Kuki}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SimSimi"
          component={SimSimi}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Character"
          component={Character}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Ideogram"
          component={Ideogram}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Adobe"
          component={Adobe}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Leonardo"
          component={Leonardo}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Krea"
          component={Krea}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="NightCafe"
          component={NightCafe}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AD"
          component={AD}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="bluewillow"
          component={bluewillow}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Flair"
          component={Flair}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DreamStudio"
          component={DreamStudio}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Clipdrop"
          component={Clipdrop}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="EasyPeasy"
          component={EasyPeasy}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TensorArt"
          component={TensorArt}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="InVideo"
          component={InVideo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Runway"
          component={Runway}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="KlingAI"
          component={KlingAI}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HeyGenAI"
          component={HeyGenAI}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DeepbrainAI"
          component={DeepbrainAI}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Colossyan"
          component={Colossyan}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Pictory"
          component={Pictory}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Lumen5"
          component={Lumen5}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="RenderForest"
          component={RenderForest}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Freepik"
          component={Freepik}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Canva"
          component={Canva}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Veed"
          component={Veed}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
