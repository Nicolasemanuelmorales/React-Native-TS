import React from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Menu from "../components/menu/menu.components";
import Home from "./homeStackNavigator";
import Favoritos from "./favoritosStackNavigator";
import colors from "../../assets/colors";
import Loader from "../components/loader/loader.components";
import { useSelector } from "react-redux";
import { IRootState } from "../redux/reducers/rootReducer";

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#FFF",
    },
  };
  const loader = useSelector((state: IRootState) => state.loader.value);

  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <Drawer.Navigator
          initialRouteName="Inicio"
          screenOptions={{ headerTintColor: colors.ROJO_PRINCIPAL }}
          drawerContent={(props) => <Menu {...props} />}
        >
          <Drawer.Screen name="Inicio" component={Home} />
          <Drawer.Screen name="Favoritos" component={Favoritos} />
        </Drawer.Navigator>
      </NavigationContainer>
      <Loader open={loader} size={50} color={colors.ROJO_PRINCIPAL} />
    </>
  );
}
