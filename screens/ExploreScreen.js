import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> ExploreScreen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  text: {
    color: "#FF6347",
  },
});

export default ExploreScreen;
