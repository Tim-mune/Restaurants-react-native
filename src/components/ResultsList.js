import React from "react";
import { FlatList } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import PlaceResults from "./PlaceResults";

const ResultsList = ({ header, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{header}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <PlaceResults items={item} />;
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
export default ResultsList;
