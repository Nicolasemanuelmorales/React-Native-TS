import React from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import DrawerNavigatorContent from "../components/DrawerContent/DrawerContent.components";
import Home from "./homeStackNavigator";
import Favoritos from "./favoritosStackNavigator";

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#FFF",
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={(props) => <DrawerNavigatorContent {...props} />}
      >
        <Drawer.Screen name="Favoritos" component={Favoritos} />
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
