import styled from "styled-components/native";
import { Theme } from "../../constants/Theme";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const Container = styled.View`
  background: ${Theme.light.primary};
  width: 100%;
  height: 100%;
`;
