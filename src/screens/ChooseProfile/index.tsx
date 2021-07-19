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

const dropShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
};

export const ChooseProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TitleScreen>Perfis</TitleScreen>

      <ProfileList style={{ elevation: 10 }}>
        <Profile
          onPress={() => navigation.navigate("Radical")}
          profile={"radical"}
          style={dropShadow}
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

        <Profile
          onPress={() => navigation.navigate("Zen")}
          profile={"zen"}
          style={dropShadow}
        >
          <AboutProfile>
            <ProfileName>Zen</ProfileName>
            <ProfileDescription>Destinos para contemplar</ProfileDescription>
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
          style={dropShadow}
        >
          <AboutProfile>
            <ProfileName>Cultural</ProfileName>
            <ProfileDescription>Destinos para aprender</ProfileDescription>
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
      <BackgroundEffect
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          position: "absolute",
          elevation: 3,
        }}
      />
    </Container>
  );
};
