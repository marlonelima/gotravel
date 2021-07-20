import { StyleSheet } from "react-native";
import { Theme } from "../../constants/Theme";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: Theme.light.background,
    paddingTop: hp(3),
    paddingHorizontal: 10,
  },

  searchContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },

  inputSerach: {
    backgroundColor: "#F3F3F2",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#C9C9C9",
    paddingVertical: 10,
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 20,
  },

  searchButton: {
    borderRadius: 20,
    width: 50,
    backgroundColor: "#F3F3F2",

    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    marginBottom: 30,
    backgroundColor: "#FC87A2",
    color: "#FFFF",
    borderRadius: 30,
    width: "50%",
    paddingVertical: 15,
    textAlign: "center",
    alignSelf: "flex-start",
  },
});
