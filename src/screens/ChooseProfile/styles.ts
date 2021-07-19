import styled from "styled-components/native";
import { Theme } from "../../constants/Theme";

import { StyleSheet } from "react-native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as dp,
} from "react-native-responsive-screen";

interface IProfile {
  profile: string;
}

export const Style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: Theme.light.background,
  },
  titleScreen: {
    fontSize: dp(8),
    paddingTop: hp(5),
    paddingHorizontal: dp(10),
    paddingBottom: hp(2),
    color: Theme.light.text,
  },
  profile: {
    width: dp(45),
    height: hp(24.5),
    marginBottom: hp(3),
    borderRadius: 24,
    paddingTop: dp(3),
    paddingHorizontal: dp(5),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileList: {
    flexDirection: "column",
    paddingHorizontal: dp(10),
    zIndex: 5,
    elevation: 10,
  },
  profileName: {
    fontSize: dp(5.7),
    color: "#fff",
  },
  profileDescription: {
    width: "75%",
    color: "#fff",
    fontSize: dp(3),
  },
  profileImage: {
    width: "50%",
    height: "50%",
    overflow: "hidden",
    alignSelf: "flex-end",
  },
  profileImageSrc: {
    flex: 1,
    height: undefined,
    width: undefined,
    resizeMode: "contain",
  },
  backgroundEffect: {
    backgroundColor: "#f3f3f2",
    width: dp(90),
    height: "100%",
    position: "absolute",
    marginTop: "40%",
    borderTopRightRadius: 24,
    zIndex: -1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export const Profile = styled.TouchableOpacity<IProfile>`
  background: ${({ profile }) => {
    if (profile === "radical") return Theme.light.radical;
    if (profile === "zen") return Theme.light.zen;
    if (profile === "cultural") return Theme.light.cultural;
  }};
`;
