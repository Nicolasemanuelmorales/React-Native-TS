import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, Image } from "react-native";
import Icon from "react-native-fontawesome-pro";
import { ActivityIndicator, Button, Snackbar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import loaderAction from "../../redux/actions/LoaderAction";
import { IRootState } from "../../redux/reducers/rootReducer";
import { getRandomCat } from "../../services/homeService";
import styles from "./Home.styles";
import Modal from "react-native-modal";
import favoritoAction from "../../redux/actions/FavoritoAction";
import colors from "../../../assets/colors";
import Loader from "../../components/loader/loader.components";

export default function Home() {
  const loader = useSelector((state: IRootState) => state.loader.value);
  const favoritos = useSelector((state: IRootState) => state.favoritos.value);
  const [imageRandom, setImageRandom] = useState();
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();

  const getCat = () => {
    dispatch(loaderAction(true));

    getRandomCat()
      .then((resp) => {
        setImageRandom(resp[0].url);
      })
      .finally(() => {
        setTimeout(() => dispatch(loaderAction(false)), 1000);
      });
  };

  useEffect(getCat, []);

  return (
    <View style={styles.wrapper}>
      <Image style={styles.img} source={{ uri: imageRandom }} />
      <View style={styles.boxButton}>
        <Button
          color={colors.BLANCO}
          contentStyle={styles.button}
          icon={() => (
            <Icon
              name={"redo-alt"}
              size={16}
              type="solid"
              color={colors.BLANCO}
            />
          )}
          onPress={getCat}
          children={"Recargar"}
        />

        <Button
          color={colors.BLANCO}
          disabled={
            favoritos.filter((item) => item === imageRandom).length === 0
              ? false
              : true
          }
          contentStyle={{
            backgroundColor:
              favoritos.filter((item) => item === imageRandom).length === 0
                ? colors.ROJO_PRINCIPAL
                : colors.ROJO_PRINCIPAL_DISABLE,
          }}
          icon={() => (
            <Icon name={"star"} size={16} type="solid" color={colors.BLANCO} />
          )}
          onPress={() => {
            setAlert(true),
              dispatch(favoritoAction([...favoritos, imageRandom]));
          }}
          children={"Favorito"}
        />
      </View>
      <Snackbar
        style={styles.alert}
        visible={alert}
        onDismiss={() => setAlert(false)}
        duration={3000}
        action={{
          label: "X",
        }}
        theme={{ colors: { accent: colors.BLANCO } }}
        children={"Se agrego la imagen a favoritos!"}
      />
      <Modal isVisible={loader} backdropOpacity={0.4} animationIn="flash">
        {loader ? (
          <Loader size={50} color={colors.ROJO_PRINCIPAL} />
        ) : (
          <View></View>
        )}
      </Modal>
    </View>
  );
}
