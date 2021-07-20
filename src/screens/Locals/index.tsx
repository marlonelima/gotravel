import React, { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
import { TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { LocalList } from "../../components/LocalList";
import { prismicClient } from "../../configs/prismic";

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Styles } from "./styles";

interface IProps {
  navigation: StackNavigationProp<any>;
  route: RouteProp<
    { params: { profile: "Radical" | "Zen" | "Cultural" } },
    "params"
  >;
}

export const LocalsScreen = ({ route }: IProps) => {
  const [list, setList] = useState([] as any);

  useEffect(() => {
    const predicate = Prismic.predicates.at(
      "my.local.energy",
      route.params.profile
    );

    async function fetchLocalDetails() {
      const result = await prismicClient.query(predicate);

      return setList(result.results);
    }

    fetchLocalDetails();
  }, []);

  return (
    <View style={Styles.container}>
      <View style={Styles.searchContainer}>
        <TextInput style={Styles.inputSerach}></TextInput>
        <TouchableOpacity style={Styles.searchButton}>
          <FontAwesome5 name="search" color="black" size={24} />
        </TouchableOpacity>
      </View>
      <LocalList data={list} />
    </View>
  );
};
