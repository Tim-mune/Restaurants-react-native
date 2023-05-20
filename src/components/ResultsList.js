import React from "react";
import { FlatList } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PlaceResults from "./PlaceResults";
import { withNavigation } from "react-navigation";

const ResultsList = ({ header, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{header}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Item", { id: item.id })}
            >
              <PlaceResults items={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
    marginLeft: 10,
    letterSpacing: 2,
    fontWeight: "900",
    marginBottom: 8,
    textTransform: "capitalize",
  },
  container: {
    marginBottom: 10,
  },
});
export default withNavigation(ResultsList);
