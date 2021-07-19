import styled from "styled-components/native";
import { Theme } from "../../../constants/Theme";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const Container = styled.View`
  background: ${Theme.light.background};
  width: 100%;
  height: 100%;
  padding-top: ${hp(3) + "px"};
`;

export const Header = styled.View`
  width: 100%;
  height: ${hp(17)};
  border-bottom-color: #f4f4f4;
  /* border-bottom-width: 1px; */
`;
