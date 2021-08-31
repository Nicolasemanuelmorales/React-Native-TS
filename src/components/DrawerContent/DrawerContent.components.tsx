import React from "react";
import { Drawer } from "react-native-paper";
import Icon from "react-native-fontawesome-pro";
import { View, Text } from "react-native";
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
            <View style={styles.circulo}>
              <Icon name={"code"} type="solid" size={20} color={"#fff"} />
            </View>
            <View style={styles.headerTitulo}>
              <Text>React Native</Text>
            </View>
          </View>
        </Drawer.Section>
        <Drawer.Item
          label="Inicio"
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={styles.drawerStyle}
          icon={() => (
            <Icon name={"home"} size={20} type="solid" color={"#C70039"} />
          )}
        />
        <Drawer.Item
          label="Favoritos"
          onPress={() => {
            navigation.navigate("Favoritos");
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
