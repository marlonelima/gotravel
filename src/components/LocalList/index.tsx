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
  CityInfo,
} from "./styles";

import { ILocal } from "../../@types/interfaces";

interface IProps {
  data: { data: ILocal }[];
}
import { useNavigation } from "@react-navigation/native";

export const LocalList = ({ data }: IProps) => {
  const navigation = useNavigation();

  const renderItem: ListRenderItem<{ data: ILocal }> = ({ item }) => (
    <Container
      key={item.data.name}
      onPress={() => navigation.navigate("SeeLocation", { data: item.data })}
    >
      <ImageBanner>
        <Image
          source={{ uri: item.data.banner.url }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </ImageBanner>

      <LocalInfo>
        <Name>{item.data.name}</Name>

        <CityInfo>
          <City>{item.data.city}</City>
          <City>Natureza, rio</City>
        </CityInfo>

        <Row>
          <Safety>
            <SafetyText risk={item.data.risk}>
              {item.data.risk === "0" && "Pouco risco de COVID"}
              {item.data.risk === "1" && "Risco moderado de COVID"}
              {item.data.risk === "2" && "Risco elevado de COVID"}
            </SafetyText>
          </Safety>
        </Row>
      </LocalInfo>
    </Container>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.data.name}
    />
  );
};
