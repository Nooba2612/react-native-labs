import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import Ionicons from "react-native-vector-icons/Ionicons";

import ProductsScreen from './ProductsScreen'
import FavoritesScreen from './FavoritesScreen'

export default function HomeTabs({ route }) {
  const favorites = route.params?.favorites || [];

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Products") iconName = "list-outline";
          if (route.name === "Favorites") iconName = "heart-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        initialParams={{ favorites }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        initialParams={{ favorites }}
      />
    </Tab.Navigator>
  );
}
