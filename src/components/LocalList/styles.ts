import styled from "styled-components/native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as dp,
} from "react-native-responsive-screen";

interface ISafetyText {
  risk: string;
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  max-height: ${hp(15)}px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  border-radius: 14px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

export const ImageBanner = styled.View`
  width: ${dp(25)}px;
  height: 100%;
  background: #ccc;
  margin-right: ${dp(4)}px;

  overflow: hidden;
`;

export const LocalInfo = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-right: ${dp(5)}px;
`;

export const Name = styled.Text`
  font-size: ${dp(5)}px;
  font-weight: 700;
`;

export const City = styled.Text`
  font-size: ${dp(4)}px;
  color: rgba(96, 32, 49, 0.6);
`;

export const CityInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Safety = styled.View`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  margin-top: ${hp(1)}px;
`;

export const SafetyText = styled.Text<ISafetyText>`
  color: ${({ risk }) => {
    if (risk === "0") return "#09d94e";
    if (risk === "1") return "#fcba03";
    if (risk === "2") return "#fc3d03";
  }};
`;

export const FlatList = styled.FlatList`
  width: 100%;
`;
