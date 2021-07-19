import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { MainNavigation } from "./src/navigation/main";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <>
      <StatusBar translucent={false} style="light" />
      <MainNavigation />
    </>
  );
}
