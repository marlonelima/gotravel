import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as dp,
} from "react-native-responsive-screen";

import { Theme } from "../../constants/Theme";

interface CustomProps {
  color: string;
}

export const DetailItem = styled.Text<CustomProps>`
  margin-right: ${dp(2)}px;
  font-size: ${dp(4)}px;

  padding: ${dp(2)}px ${dp(4)}px;
  background: ${(ctx) => ctx.color};

  color: white;
  border-radius: ${dp(5)}px;
`;

export const LikeButton = styled.TouchableOpacity<CustomProps>`
  background: ${(ctx) => ctx.color};

  padding: ${dp(2.5)}px;
  border-radius: 999px;
  margin-left: ${dp(2.5)}px;
`;

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  header: {
    position: "relative",
  },
  localImage: {
    width: "100%",
    height: hp(37),
  },
  backButton: {
    position: "absolute",
    top: 15,
    left: 15,
    zIndex: 10,

    margin: "2%",
  },
  titleColumn: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: dp(5),
  },
  title: {
    fontSize: dp(8),
    fontWeight: "bold",
    flex: 1,
    color: Theme.light.text,
  },
  cityText: {
    fontSize: dp(6),
  },
  content: {
    paddingHorizontal: "3%",
    paddingBottom: "4%",
    width: "96%",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: dp(5),
    transform: [
      {
        translateY: -25,
      },
    ],
  },
  description: {
    fontSize: dp(4),
    lineHeight: hp(4),
    color: "rgba(0, 0, 0, 0.6)",
  },
  detailsList: {
    flexDirection: "row",
    marginVertical: hp(2),
  },
});
