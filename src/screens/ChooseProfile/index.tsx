import React from "react";

import {
  AboutProfile,
  BackgroundEffect,
  Container,
  Profile,
  ProfileDescription,
  ProfileImage,
  ProfileList,
  ProfileName,
  TitleScreen,
} from "./styles";
import { useNavigation } from "@react-navigation/core";
import { Image } from "react-native";
import { Shadow } from "react-native-neomorph-shadows";
export const ChooseProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TitleScreen>Perfis</TitleScreen>

      <BackgroundEffect />

      <ProfileList>
        <Profile
          onPress={() => navigation.navigate("Radical")}
          profile={"radical"}
        >
          <AboutProfile>
            <ProfileName>Radical</ProfileName>
            <ProfileDescription>Destinos para explorar</ProfileDescription>
            <ProfileImage>
              <Image
                style={{ flex: 1, height: undefined, width: undefined }}
                source={require("../../assets/profiles/radical.png")}
                resizeMode="contain"
              />
            </ProfileImage>
          </AboutProfile>
        </Profile>
        <Profile onPress={() => navigation.navigate("Zen")} profile={"zen"}>
          <AboutProfile>
            <ProfileName>Zen</ProfileName>
            <ProfileDescription>Destinos para explorar</ProfileDescription>
            <ProfileImage>
              <Image
                style={{ flex: 1, height: undefined, width: undefined }}
                source={require("../../assets/profiles/zen.png")}
                resizeMode="contain"
              />
            </ProfileImage>
          </AboutProfile>
        </Profile>
        <Profile
          onPress={() => navigation.navigate("Cultural")}
          profile={"cultural"}
        >
          <AboutProfile>
            <ProfileName>Cultural</ProfileName>
            <ProfileDescription>Destinos para explorar</ProfileDescription>
            <ProfileImage>
              <Image
                style={{ flex: 1, height: undefined, width: undefined }}
                source={require("../../assets/profiles/cultural.png")}
                resizeMode="contain"
              />
            </ProfileImage>
          </AboutProfile>
        </Profile>
      </ProfileList>
    </Container>
  );
};
