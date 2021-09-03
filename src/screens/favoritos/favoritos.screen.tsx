import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/reducers/rootReducer";
import styles from "./favoritos.styles";
import Wrapper from "../../components/wrapper/wrapper.components";

export default function favoritos() {
  const favoritos = useSelector((state: IRootState) => state.favoritos.value);

  return (
    <Wrapper
      child={
        <>
          {favoritos.length === 0 ? (
            <View style={styles.boxText}>
              <Text style={styles.text}>No ha agragado ninguna imagen. </Text>
            </View>
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.wrapper}
            >
              {favoritos.map((item, index) => {
                return (
                  <>
                    <View key={index} style={styles.boxImg}>
                      <Image
                        key={index}
                        style={styles.img}
                        source={{ uri: item }}
                      />
                    </View>
                  </>
                );
              })}
            </ScrollView>
          )}
        </>
      }
    />
  );
}
