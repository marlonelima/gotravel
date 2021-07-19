import { FontAwesome5,  } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { LocalImageList } from "../../components/LocalImageList";
import { Theme } from "../../constants/Theme";
import {
  DetailItem,
  LikeButton,
  Styles
} from "./styles";


export const SeeLocationScreen = () => {
  const navigator = useNavigation()

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
            Centro Cultural{'\n'}
            Oscar Niemyer
          </Text>
          <LikeButton onPress={() => {}} color={Theme.light.radical}>
            <FontAwesome5 name="heart" size={30} color="white" />
          </LikeButton>
        </View>
        <Text style={Styles.cityText}>Pirenópolis</Text>

        <View style={Styles.detailsList}>
          <DetailItem color={Theme.light.radical}>
            Radical
          </DetailItem>
          <DetailItem color={Theme.light.primary}>
            Poucos casos de COVID
          </DetailItem>
        </View>

        <Text style={Styles.description}>
          Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio. 
          Interagi no mé, cursus quis, vehicula ac nisi. Quem manda na minha terra sou euzis! Nec orci ornare consequat. 
          Praesent lacinia ultrices consectetur. Sed non ipsum felis.
        </Text>

        <LocalImageList images={imageList} />
      </View>
    </ScrollView>
  );
};
