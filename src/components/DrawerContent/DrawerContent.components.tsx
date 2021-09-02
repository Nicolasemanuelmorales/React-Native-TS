import React from "react";
import { Drawer } from "react-native-paper";
import Icon from "react-native-fontawesome-pro";
import { View, Text, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import styles from "./DrawerContent.styles";

interface IProps {
  navigation: any;
}

function DrawerNavigatorContent({ navigation }: IProps) {
  return (
    <>
      <DrawerContentScrollView {...navigation}>
        <Drawer.Section>
          <View style={styles.headerDrawer}>
            <Image
              style={{ width: 40, height: 40, padding: "4%" }}
              source={require("../../../assets/images/cat.png")}
            />
            <Text style={styles.headerTitulo}>React Native Cats</Text>
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
            <Icon name={"home"} size={20} type="solid" color={"#C70039"} />
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
            <Icon name={"star"} type="solid" size={20} color={"#C70039"} />
          )}
        />
      </DrawerContentScrollView>
    </>
  );
}

export default DrawerNavigatorContent;
