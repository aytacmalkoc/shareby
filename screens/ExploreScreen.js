import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import Header from "../components/Header";
const ExploreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});

export default ExploreScreen;
