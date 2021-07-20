import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Dimensions } from "react-native";
import React from "react";

import { Theme } from "../constants/Theme";
import { LocalsScreen } from "../screens/Locals";

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
    <Tab.Screen name="Locals" component={LocalsScreen} />
  </Tab.Navigator>
);
