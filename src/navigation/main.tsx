import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { SeeLocationScreen } from "../screens/SeeLocation";
import { ChooseProfileScreen } from "../screens/ChooseProfile";
import { RadicalScreen } from "../screens/Profiles/Radical";
import { ZenScreen } from "../screens/Profiles/Zen";
import { CulturalScreen } from "../screens/Profiles/Cultural";

const Stack = createStackNavigator();

export const MainNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="ChooseProfile"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ChooseProfile" component={ChooseProfileScreen} />
      <Stack.Screen name="Radical" component={RadicalScreen} />
      <Stack.Screen name="Zen" component={ZenScreen} />
      <Stack.Screen name="Cultural" component={CulturalScreen} />
      <Stack.Screen name="SeeLocation" component={SeeLocationScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
