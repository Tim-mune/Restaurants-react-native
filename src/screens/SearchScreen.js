import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useData from "../hooks/getData";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, loading, isError] = useData(term);
  const filterResults = (price) => {
    return results.filter((results) => results.price === price);
  };
  if (loading) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.viewDesign}>
      <SearchBar
        term={term}
        onChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log("click")}
      />
      {!isError && !loading ? (
        <Text>we have found {results.length} results</Text>
      ) : (
        <Text>{isError}</Text>
      )}
      <ScrollView>
        <ResultsList header="cost effective" results={filterResults("$")} />
        <ResultsList header="bit pricer" results={filterResults("$$")} />
        <ResultsList header="Big spender" results={filterResults("$$$")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewDesign: {
    flex: 1,
    padding: 10,
  },
});
export default SearchScreen;
