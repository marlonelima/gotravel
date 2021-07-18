import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { FindScreen } from "../screens/Find";

import { createStackNavigator } from "@react-navigation/stack";
import { SeeLocationScreen } from "../screens/SeeLocation";

const Stack = createStackNavigator();

export const MainNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Find" component={FindScreen} />
      <Stack.Screen name="SeeLocation" component={SeeLocationScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
