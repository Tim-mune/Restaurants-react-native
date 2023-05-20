import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ term, onChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <FontAwesome name="search" size={24} color="black" />
      <TextInput
        placeholder="search"
        style={styles.inputBox}
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onEndEditing={onTermSubmit}
        onChangeText={onChange}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    marginHorizontal: 10,
    height: 50,
    borderRadius: 7,
    backgroundColor: "F0EEEE",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    gap: 50,
    marginTop: 20,
    padding: 5,
    position: "relative",
    marginBottom: 10,
    backfaceVisibility: "hidden",
  },
  text: {
    fontSize: 25,
    letterSpacing: 2,
    fontWeight: "bold",
    padding: 3,
  },
  inputBox: {
    fontSize: 20,
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 15,
    alignSelf: "center",
  },
});
export default SearchBar;
