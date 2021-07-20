import styled from "styled-components/native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as dp,
} from "react-native-responsive-screen";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${hp(12) + "px"};
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  border-radius: 14px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.40);
`;

export const ImageBanner = styled.View`
  width: ${dp(25) + "px"};
  height: 100%;
  background: #ccc;
  margin-right: ${dp(4) + "px"};
  border-radius: 10px;
  overflow: hidden;
`;

export const LocalInfo = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.Text`
  font-size: ${dp(5) + "px"};
  font-weight: 700;
`;

export const City = styled.Text`
  font-size: ${dp(4) + "px"};
  color: rgba(96, 32, 49, .6);
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
  margin-top: ${hp(1) + "px"};
`;

export const SafetyText = styled.Text`
  color: #09d94e;
  margin-left: ${dp(2) + "px"};
`;

export const FlatList = styled.FlatList`
  width: 100%;
`;
