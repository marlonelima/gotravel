import React from "react";
import { FlatList, Image, ListRenderItem } from "react-native";

import {
  Container,
  City,
  Name,
  Row,
  Safety,
  SafetyText,
  ImageBanner,
  LocalInfo,
} from "./styles";

import { FontAwesome5 } from "@expo/vector-icons";

import { ILocal } from "../../@types/interfaces";

interface IProps {
  data: ILocal[];
}
import { useNavigation } from "@react-navigation/native";

export const LocalItem = ({ data }: IProps) => {
  const navigation = useNavigation();
  const renderItem: ListRenderItem<ILocal> = ({ item }) => (
    <Container onPress={() => navigation.navigate("SeeLocation")}>
      <ImageBanner>
        <Image
          source={require("../../assets/example/cachoeira-do-abade.jpg")}
          resizeMode="cover"
        />
      </ImageBanner>
      <LocalInfo>
        <Name>Cachoeira do Abade</Name>
        <City>Pirenópolis</City>
        <Row>
          <Safety>
            <FontAwesome5 name="head-side-mask" size={18} color="#09d94e" />
            <SafetyText>Poucos riscos</SafetyText>
          </Safety>
        </Row>
      </LocalInfo>
    </Container>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
};
