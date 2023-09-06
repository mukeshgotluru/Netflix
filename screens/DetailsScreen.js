import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailsViewScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie/Show Details</Text>
      {/* Add your movie/show details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default DetailsViewScreen;
