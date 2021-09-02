import * as React from "react";
import { ActivityIndicator } from "react-native-paper";

interface ILoader {
  size: number;
  color: string;
}

function loader(props: ILoader) {
  const { size, color } = props;

  return (
    <ActivityIndicator hidesWhenStopped={false} size={size} color={color} />
  );
}

export default loader;
