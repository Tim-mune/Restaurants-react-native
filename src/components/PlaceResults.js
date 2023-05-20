import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const PlaceResults = ({ items }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: items.image_url }} style={styles.image} />
      <Text>{items.name}</Text>
      <Text>
        {items.rating} Stars, {items.review_count}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
  },
});
export default PlaceResults;
