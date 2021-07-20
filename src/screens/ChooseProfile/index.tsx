import React from "react";

import { Profile, Style } from "./styles";
import { useNavigation } from "@react-navigation/core";
import { Image, Text, View } from "react-native";

export const ChooseProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={Style.container}>
      <Text style={Style.titleScreen}>Perfis</Text>

      <View style={Style.profileList}>
        <Profile
          style={Style.profile}
          profile={"radical"}
          onPress={() => navigation.navigate("Radical")}
        >
          <View>
            <Text style={Style.profileName}>Radical</Text>
            <Text style={Style.profileDescription}>Destinos para explorar</Text>
            <View style={Style.profileImage}>
              <Image
                style={Style.profileImageSrc}
                source={require("../../assets/profiles/radical.png")}
              />
            </View>
          </View>
        </Profile>

        <Profile
          style={Style.profile}
          profile={"zen"}
          onPress={() => navigation.navigate("Zen")}
        >
          <View>
            <Text style={Style.profileName}>Zen</Text>
            <Text style={Style.profileDescription}>
              Destinos para contemplar
            </Text>
            <View style={Style.profileImage}>
              <Image
                style={Style.profileImageSrc}
                source={require("../../assets/profiles/zen.png")}
              />
            </View>
          </View>
        </Profile>

        <Profile
          style={Style.profile}
          profile={"cultural"}
          onPress={() => navigation.navigate("Cultural")}
        >
          <View>
            <Text style={Style.profileName}>Cultural</Text>
            <Text style={Style.profileDescription}>Destinos para aprender</Text>
            <View style={Style.profileImage}>
              <Image
                style={Style.profileImageSrc}
                source={require("../../assets/profiles/cultural.png")}
              />
            </View>
          </View>
        </Profile>
      </View>
      <View style={Style.backgroundEffect} />
    </View>
  );
};
