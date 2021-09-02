import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import FavoritosScreen from "../screens/favoritos/favoritos.screen";

const Stack = createStackNavigator();

export default function favoritosStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, title: "Favoritos" }}>
      <Stack.Screen name="FavoritosScreen" component={FavoritosScreen} />
    </Stack.Navigator>
  );
}
