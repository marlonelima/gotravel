import React from "react";
import { FlatList, Image, ListRenderItem, TextInput, TouchableOpacity } from "react-native";

import {
  Container,
  City,
  Name,
  Row,
  Safety,
  SafetyText,
  ImageBanner,
  LocalInfo,
  CityInfo,
} from "./styles";

import { FontAwesome5 } from "@expo/vector-icons";

import { ILocal } from "../../@types/interfaces";

interface IProps {
  data: ILocal[];
}
import { useNavigation } from "@react-navigation/native";

export const LocalList = ({ data }: IProps) => {
  const navigation = useNavigation();
  const renderItem: ListRenderItem<ILocal> = ({ item }) => (
    <Container onPress={() => navigation.navigate("SeeLocation")}>
      <ImageBanner>
        <Image
          source={require("../../assets/example/cachoeira-do-abade.jpg")}
          resizeMode="contain"
        />
      </ImageBanner>

      <LocalInfo>
        <Name>Cachoeira do Abade</Name>

        <CityInfo>
          <City>Pirenópolis</City>
          <City>Natureza, rio</City>
        </CityInfo>

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
