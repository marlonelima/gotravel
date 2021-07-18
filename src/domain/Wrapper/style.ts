import styled from "styled-components/native";
import { Theme } from "../../constants/Theme";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as dp,
} from "react-native-responsive-screen";

export const Container = styled.View`
  background: ${Theme.light.background};
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: ${hp(17) + "px"};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: ${`${hp(5)}px ${dp(3)}px`};
`;

export const HeaderButton = styled.Pressable`
  width: ${dp(12.5) + "px"};
  height: ${hp(6.5) + "px"};
  background: #f4f4f4;
  border-radius: ${(dp(12.5) + hp(6.5)) / 2};
  margin-left: 15px;
`;
