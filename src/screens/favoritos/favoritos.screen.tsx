import React from "react";
import { View, Image } from "react-native";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/reducers/rootReducer";
import colors from "../../../assets/colors";
import styles from "./favoritos.styles";
import { ScrollView } from "react-native-gesture-handler";

export default function favoritos() {
  const favoritos = useSelector((state: IRootState) => state.favoritos.value);

  return (
    <ScrollView>
      <View
        style={{
          marginVertical: "5%",
          flexDirection: "row",
          paddingHorizontal: "5%",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {favoritos.map((item, index) => {
          {
            console.log(item);
          }
          return (
            <View
              key={index}
              style={{
                width: "47.5%",
                height: 200,
                backgroundColor: colors.ROJO_PRINCIPAL,
                marginTop: "5%",
              }}
            >
              <Image key={index} style={styles.img} source={{ uri: item }} />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
