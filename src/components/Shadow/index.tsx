import React from "react";
import { View } from "react-native";

export const Shadow: React.FC = ({ children }) => {
  return (
    <View
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        flex: 1,
        zIndex: 3,

        elevation: 5,
      }}
    ></View>
  );
};
