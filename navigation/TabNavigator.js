import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  ExploreScreen,
  SearchScreen,
  FavouritesScreen,
  ProfileScreen,
} from "../screens";

import { Explore, Favourites, Profile, Search } from "../assets/icons";
import { TouchableHighlight } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();
const options = {
  activeTintColor: "#5484df",
  inactiveTintColor: "#999999",
  style: {
    borderTopWidth: 0,
    elevation: 0,
  },
  iconStyle: {
    paddingBottom: 12,
  },
  labelStyle: {
    paddingBottom: 12,
  },
  showLabel: false,
};
const HIT_SLOP = { top: 35, left: 8, right: 8, bottom: 8 };

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={options}>
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TouchableHighlight hitSlop={HIT_SLOP}>
                <View style={styles.icon}>
                  <Explore fill={color} stroke={color} />
                  <Text style={[styles.label, { color }]}>Explore</Text>
                </View>
              </TouchableHighlight>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TouchableHighlight hitSlop={HIT_SLOP}>
                <View style={styles.icon}>
                  <Search fill={color} stroke={color} />
                  <Text style={[styles.label, { color }]}>Search</Text>
                </View>
              </TouchableHighlight>
            );
          },
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TouchableHighlight hitSlop={HIT_SLOP}>
                <View style={styles.icon}>
                  <Favourites fill={color} stroke={color} />
                  <Text style={[styles.label, { color }]}>Favourites</Text>
                </View>
              </TouchableHighlight>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TouchableHighlight hitSlop={HIT_SLOP}>
                <View style={styles.icon}>
                  <Profile fill={color} stroke={color} />
                  <Text style={[styles.label, { color }]}>Profile</Text>
                </View>
              </TouchableHighlight>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignItems: "center",
  },
  label: {
    fontSize: 10,
    paddingTop: 6,
  },
});

export default TabNavigator;
