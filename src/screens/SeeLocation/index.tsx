import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { LocalImageList } from "../../components/LocalImageList";
import { Theme } from "../../constants/Theme";
import { DetailItem, LikeButton, Styles } from "./styles";
import { ILocal } from "../../@types/interfaces";
import { StackNavigationProp } from "@react-navigation/stack";

interface IProps {
  navigation: StackNavigationProp<any>;
  route: RouteProp<{ params: { data: ILocal } }, "params">;
}

export const SeeLocationScreen = ({ route }: IProps) => {
  const navigator = useNavigation();

  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.header}>
        <TouchableOpacity
          style={Styles.backButton}
          onPress={() => navigator.goBack()}
        >
          <FontAwesome5 name="arrow-circle-left" color="white" size={35} />
        </TouchableOpacity>

        <Image
          style={Styles.localImage}
          source={{
            uri: route.params.data.banner.url,
          }}
          resizeMode="cover"
        />
      </View>

      <View style={Styles.content}>
        <View style={Styles.titleColumn}>
          <Text style={Styles.title}>{route.params.data.name}</Text>
          <LikeButton onPress={() => {}} color={Theme.light.radical}>
            <FontAwesome5 name="heart" size={24} color="white" />
          </LikeButton>
        </View>

        <Text style={Styles.cityText}>{route.params.data.city}</Text>

        <View style={Styles.detailsList}>
          <DetailItem color={Theme.light.radical}>
            {route.params.data.energy}
          </DetailItem>
          <DetailItem color="#09d94e">
            {route.params.data.risk === "0" && "Poucos casos de COVID"}
          </DetailItem>
        </View>

        <Text style={Styles.description}>
          {route.params.data.description[0].text}
        </Text>

        <LocalImageList images={route.params.data.images} />
      </View>
    </ScrollView>
  );
};
