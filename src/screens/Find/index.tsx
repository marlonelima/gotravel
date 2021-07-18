import React from "react";
import { Theme } from "../../constants/Theme";
import { TopTab } from "../../navigation/toptab";
import { Container, Header, HeaderButton } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";

type ProfileScreenNavigationProp = StackNavigationProp<any, "Find">;

interface IProps {
  navigation: ProfileScreenNavigationProp;
}
export const FindScreen = () => {
  return (
    <Container>
      <Header>
        <HeaderButton>
          <Ionicons
            name="search-outline"
            size={24}
            color={Theme.light.primary}
          />
        </HeaderButton>
        <HeaderButton>
          <Ionicons name="grid-outline" size={24} color={Theme.light.primary} />
        </HeaderButton>
      </Header>
      <TopTab />
    </Container>
  );
};
