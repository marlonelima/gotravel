import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { SeeLocationScreen } from "../screens/SeeLocation";
import { ChooseProfileScreen } from "../screens/ChooseProfile";
import { LocalsScreen } from "../screens/Locals";

const Stack = createStackNavigator();

export const MainNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="ChooseProfile"
      screenOptions={{ headerShown: false, animationEnabled: false }}
    >
      <Stack.Screen name="ChooseProfile" component={ChooseProfileScreen} />
      <Stack.Screen name="Locals" component={LocalsScreen} />
      <Stack.Screen name="SeeLocation" component={SeeLocationScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
