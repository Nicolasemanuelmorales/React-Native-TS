import * as React from "react";
import { ActivityIndicator } from "react-native-paper";
import Modal from "react-native-modal";

interface ILoader {
  size: number;
  open: boolean;
  color: string;
}

function Loader(props: ILoader) {
  const { size, color, open } = props;

  return (
    <Modal isVisible={open} backdropOpacity={0.6} animationIn="flash">
      {open ? (
        <ActivityIndicator hidesWhenStopped={false} size={size} color={color} />
      ) : (
        <></>
      )}
    </Modal>
  );
}

export default Loader;
