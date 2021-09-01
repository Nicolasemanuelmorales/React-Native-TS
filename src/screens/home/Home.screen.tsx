import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, View, Image } from "react-native";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/reducers/rootReducer";
import { getRandomCat } from "../../services/homeService";

interface IProps {
  navigation: any;
}

export default function Home(props: IProps) {
  const { navigation } = props;
  const [imageRandom, setImageRandom] = useState();

  const getCat = () => {
    getRandomCat().then((resp) => {
      setImageRandom(resp[0].url);
    });
  };

  useEffect(getCat, []);

  return (
    <View style={{ marginTop: 50 }}>
      <Button title={"Home"} onPress={() => console.log(imageRandom)} />
      <Image
        style={{ width: "100%", height: 350, resizeMode: "contain" }}
        source={{
          uri: imageRandom,
        }}
      />
    </View>
  );
}
