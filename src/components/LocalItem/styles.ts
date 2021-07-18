import styled from "styled-components/native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as dp,
} from "react-native-responsive-screen";

export const Container = styled.TouchableOpacity`
  width: 92%;
  height: ${hp(12) + "px"};
  display: flex;
  flex-direction: row;
  padding: 0 3%;
  margin-bottom: 20px;
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
