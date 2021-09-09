import React from "react";
import { Drawer } from "react-native-paper";
import Icon from "react-native-fontawesome-pro";
import { View, Text, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import styles from "./menu.styles";
import colors from "../../../assets/colors";
interface IProps {
  navigation: any;
}

function DrawerNavigatorContent(IProps) {
  const { navigation } = IProps;
  return (
    <DrawerContentScrollView {...navigation}>
      <Drawer.Section>
        <View style={styles.headerDrawer}>
          <Image
            style={styles.img}
            source={require("../../../assets/images/cat.png")}
          />
          <Text style={styles.headerTitulo}>React Native With Cats</Text>
        </View>
      </Drawer.Section>
      <Drawer.Item
        label="Inicio"
        onPress={() => {
          navigation.reset({
            routes: [{ name: "Inicio" }],
          });
        }}
        style={styles.drawerStyle}
        icon={() => (
          <Icon
            name={"home"}
            size={20}
            type="solid"
            color={colors.ROJO_PRINCIPAL}
          />
        )}
      />
      <Drawer.Item
        label="Favoritos"
        onPress={() => {
          navigation.reset({
            routes: [{ name: "Favoritos" }],
          });
        }}
        style={styles.drawerStyle}
        icon={() => (
          <Icon
            name={"star"}
            type="solid"
            size={20}
            color={colors.ROJO_PRINCIPAL}
          />
        )}
      />
    </DrawerContentScrollView>
  );
}

export default DrawerNavigatorContent;
