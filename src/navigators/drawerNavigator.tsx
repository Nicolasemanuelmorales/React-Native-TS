import React from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import DrawerNavigatorContent from "../components/drawerContent/DrawerContent.components";
import Home from "./homeStackNavigator";
import Favoritos from "./favoritosStackNavigator";
import colors from "../../assets/colors";

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
        initialRouteName="Inicio"
        screenOptions={{ headerTintColor: colors.ROJO_PRINCIPAL }}
        drawerContent={(props) => <DrawerNavigatorContent {...props} />}
      >
        <Drawer.Screen name="Inicio" component={Home} />
        <Drawer.Screen name="Favoritos" component={Favoritos} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
