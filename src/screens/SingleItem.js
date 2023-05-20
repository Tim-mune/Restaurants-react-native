import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../axios/yelp";

const SingleItem = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  //   console.log(id);
  const getRestult = async (id) => {
    try {
      const res = await yelp.get(`/${id}`);
      const data = res.data;
      setResult(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRestult(id);
  }, []);
  if (!result) {
    return <Text>please wait...</Text>;
  }
  return (
    <View style={styles.viewStyles}>
      <Text style={styles.text}>{result.name}</Text>
      <FlatList
        style={styles.imageContainer}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyles: {
    padding: 20,
    margin: 10,
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 4,
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
    letterSpacing: 2,
    fontWeight: "bold",
  },
});
export default SingleItem;
