import { FontAwesome5,  } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { LocalImageList } from "../../components/LocalImageList";
import { Theme } from "../../constants/Theme";
import {
  Container,
  Title,
  TitleColumn,
  Header,
  CityText,
  Content,
  LocalImage,
  BackButton,
  Description,
  DetailsList,
  DetailItem
} from "./styles";


export const SeeLocationScreen = () => {
  const navigator = useNavigation()

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigator.goBack()}>
          <FontAwesome5 name="arrow-circle-left" color="white" size={35} />
        </BackButton>
        <LocalImage
          source={require("../../assets/example/cachoeira-do-abade.jpg")}
          resizeMode="cover"
        />      
      </Header>

      <Content style={{
        transform: [{translateY: -20}]
      }}>
        <TitleColumn>
          <Title>
            Centro Cultural{'\n'}
            Oscar Niemyer
          </Title>
          <TouchableOpacity onPress={() => {}}>
            <FontAwesome5 name="heart" size={30} />
          </TouchableOpacity>
        </TitleColumn>
        <CityText>Pirenópolis</CityText>

        <DetailsList>
          <DetailItem color={Theme.light.radical}>
            Radical
          </DetailItem>
          <DetailItem color={Theme.light.primary}>
            Poucos casos de COVID
          </DetailItem>
        </DetailsList>

        <Description>
          Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio. 
          Interagi no mé, cursus quis, vehicula ac nisi. Quem manda na minha terra sou euzis! Nec orci ornare consequat. 
          Praesent lacinia ultrices consectetur. Sed non ipsum felis.
        </Description>

        <LocalImageList images={[
          { image: 'link1' },
          { image: 'link2' },
          { image: 'link3' },
        ]} />
      </Content>
    </Container>
  );
};
