import {
  heightPercentageToDP as hp,
  widthPercentageToDP as dp,
} from "react-native-responsive-screen";

import { StyleSheet } from "react-native";


export const Styles = StyleSheet.create({
  container: {
    borderRadius: dp(5),
    width: dp(40),
    height: hp(20),
    marginRight: dp(2),
    marginTop: dp(2)
  }
})
