import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  ExploreScreen,
  SearchScreen,
  FavouritesScreen,
  ProfileScreen,
} from "../screens";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
