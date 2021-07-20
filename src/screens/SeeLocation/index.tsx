import { FontAwesome5,  } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Prismic from '@prismicio/client'

import { LocalImageList } from "../../components/LocalImageList";
import { prismicClient } from "../../configs/prismic";
import { Theme } from "../../constants/Theme";
import {
  DetailItem,
  LikeButton,
  Styles
} from "./styles";
import { ILocal2 } from "../../@types/interfaces";


export const SeeLocationScreen = () => {
  const navigator = useNavigation()
  const [localDetails, setLocalDetails] = useState({} as ILocal2)

  const imageList = [
    { 
      image: 'https://images.adsttc.com/media/images/5bfd/2598/08a5/e51c/3500/05d8/newsletter/05503PR061127_011D.jpg?1543316877',
      id: 'imagem-1'
    },
    { 
      image: 'https://live.staticflickr.com/8205/8249952374_4ca9412d20_c.jpg',
      id: 'imagem-2'
    }
  ]

  useEffect(() => {
    const predicate = Prismic.predicates.at('my.local.energy', 'Radical')
    
    async function fetchLocalDetails() {
      const result = await prismicClient.queryFirst(predicate)

      setLocalDetails(result.data)
    }

    fetchLocalDetails()
  }, [])

  if (!localDetails.name) {
    return <View></View>
  }

  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.header}>
        <TouchableOpacity style={Styles.backButton} onPress={() => navigator.goBack()}>
          <FontAwesome5 name="arrow-circle-left" color="white" size={35} />
        </TouchableOpacity>
        <Image
          style={Styles.localImage}
          source={{
            uri: imageList[0].image
          }}
          resizeMode="cover"
        />      
      </View>

      <View style={Styles.content}>
        <View style={Styles.titleColumn}>
          <Text style={Styles.title}>
            {localDetails.name}
          </Text>
          <LikeButton onPress={() => {}} color={Theme.light.radical}>
            <FontAwesome5 name="heart" size={30} color="white" />
          </LikeButton>
        </View>
        <Text style={Styles.cityText}>
          {localDetails.city}
        </Text>

        <View style={Styles.detailsList}>
          <DetailItem color={Theme.light.radical}>
            {localDetails.energy}
          </DetailItem>
          <DetailItem color={Theme.light.primary}>
            {localDetails.risk === "0" && 'Poucos casos de COVID'}
          </DetailItem>
        </View>

        <Text style={Styles.description}>
          {localDetails.description[0].text}
        </Text>

        <LocalImageList images={localDetails.images} />
      </View>
    </ScrollView>
  );
};
