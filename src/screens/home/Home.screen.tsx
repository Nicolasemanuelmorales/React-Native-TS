import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, Image } from "react-native";
import Icon from "react-native-fontawesome-pro";
import { Button, Snackbar } from "react-native-paper";
import { getRandomCat } from "../../services/homeService";
import styles from "./Home.styles";

interface IProps {
  navigation: any;
}

export default function Home(props: IProps) {
  const [imageRandom, setImageRandom] = useState();
  const [alert, setAlert] = useState(false);

  const getCat = () => {
    getRandomCat().then((resp) => {
      setImageRandom(resp[0].url);
    });
  };

  useEffect(getCat, []);

  return (
    <View style={styles.wrapper}>
      <Image style={styles.img} source={{ uri: imageRandom }} />
      <View style={styles.boxButton}>
        <Button
          color="#fff"
          contentStyle={{ backgroundColor: "#C70039" }}
          icon={() => (
            <Icon name={"redo-alt"} size={16} type="solid" color={"#fff"} />
          )}
          onPress={getCat}
          children={"Recargar"}
        />

        <Button
          color="#fff"
          contentStyle={{ backgroundColor: "#C70039" }}
          icon={() => (
            <Icon name={"star"} size={16} type="solid" color={"#fff"} />
          )}
          onPress={() => setAlert(true)}
          children={"Favorito"}
        />
      </View>
      <Snackbar
        style={{ bottom: 0 }}
        visible={alert}
        onDismiss={() => setAlert(false)}
        duration={3000}
        action={{
          label: "X",
        }}
      >
        Se agrego la imagen a favoritos!
      </Snackbar>
    </View>
  );
}
