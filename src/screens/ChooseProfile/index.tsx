import React from "react";
import { Text } from "react-native";
import { Container, Profile, ProfileList, TitleScreen } from "./styles";
import { useNavigation } from "@react-navigation/core";

export const ChooseProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <TitleScreen>Perfis</TitleScreen>
      <ProfileList>
        <Profile
          onPress={() => navigation.navigate("Radical")}
          profile={"radical"}
        ></Profile>
        <Profile
          onPress={() => navigation.navigate("Zen")}
          profile={"zen"}
        ></Profile>
        <Profile
          onPress={() => navigation.navigate("Cultural")}
          profile={"cultural"}
        ></Profile>
      </ProfileList>
    </Container>
  );
};
