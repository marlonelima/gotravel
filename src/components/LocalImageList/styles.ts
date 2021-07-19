import styled from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as dp,
} from "react-native-responsive-screen";

export const LocalImage = styled.Image`
  border-radius: ${dp(5)}px;

  width: ${dp(40)}px;
  height: ${hp(20)}px;


  margin-right: ${dp(2)}px;

  margin-top: ${dp(2)}px;
`
