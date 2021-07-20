import React from "react";
import { TextInput, TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { Theme } from "../../../constants/Theme";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { LocalList } from "../../../components/LocalList";

const DATA = [
  {
    name: "cachoeira do Abade",
    city: "Pirenópolis",
    image: "",
    safety: "",
  },
  {
    name: "Cachoeira do Rosário",
    city: "Pirenópolis",
    image: "",
    safety: "",
  },
];

export const RadicalScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.inputSerach}></TextInput>
        <TouchableOpacity style={styles.searchButton}>
          {/* <Image source={search}></Image> */}
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>Radical</TouchableOpacity>

      <LocalList data={DATA} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    background: `${Theme.light.background}`,
    paddingTop: `${hp(3) + "px"}`,
    paddingHorizontal: 10,
  },

  searchContainer: {
    flexDirection: "row",
    marginBottom: 30
  },

  inputSerach: {
    backgroundColor: "#F3F3F2",
    borderRadius: 20,
    borderWidth: 1, 
    borderColor: "#C9C9C9",
    paddingVertical: 10,
    flex: 1,
    marginRight: 10
  },

  searchButton: {
    borderRadius: 20,
    width: 40,
    backgroundColor: "#F3F3F2",

    justifyContent: "center",
    alignItems: "center"
  },

  button: {
    marginBottom: 30,
    backgroundColor: "#FC87A2",
    color: "#FFFF",
    borderRadius: 30,
    width: "50%",
    paddingVertical: 15,
    textAlign: "center",
    alignSelf: "flex-start"
  }
})