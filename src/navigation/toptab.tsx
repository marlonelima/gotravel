import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Dimensions } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Theme } from "../constants/Theme";
import { RadicalScreen } from "../screens/Find/Radical";
import { ZenScreen } from "../screens/Find/Zen";
import { TranquiloScreen } from "../screens/Find/Tranquilo";

const Tab = createMaterialTopTabNavigator();

export const TopTab = () => (
  <Tab.Navigator
    initialLayout={{ width: Dimensions.get("window").width }}
    tabBarOptions={{
      style: {
        elevation: 0,
      },
      indicatorStyle: {
        backgroundColor: Theme.light.primary,
      },
    }}
  >
    <Tab.Screen name="Radical" component={RadicalScreen} />
    <Tab.Screen name="Zen" component={ZenScreen} />
    <Tab.Screen name="Tranquilo" component={TranquiloScreen} />
  </Tab.Navigator>
);
