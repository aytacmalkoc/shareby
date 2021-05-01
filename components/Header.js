import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import { Notification } from "../assets/icons";

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.headerTitle}> Explore </Text>
      <View style={styles.headerActions}>
        <Notification style={styles.actionIcon} fill="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 26,
    paddingHorizontal: 30,
  },
  headerTitle: {
    color: "#0D182F",
    fontSize: 22,
  },
  headerActions: {
    flexDirection: "row",
  },
  actionIcon: {
    marginLeft: 20,
    width: 22,
    height: 22,
  },
});

export default Header;
