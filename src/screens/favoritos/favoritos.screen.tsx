import React from "react";
import { Button, View } from "react-native";

interface IProps {
  navigation: any;
}

export default function favoritos(props: IProps) {
  const { navigation } = props;

  return (
    <View style={{ marginTop: 50 }}>
      <Button
        title={"Favoritos"}
        onPress={() => navigation.navigate("Inicio")}
      />
    </View>
  );
}
