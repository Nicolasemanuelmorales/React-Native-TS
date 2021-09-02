import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    flex: 1,
  },
  img: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
  },
  boxButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  alert: {
    bottom: 0,
    backgroundColor: colors.ROJO_PRINCIPAL,
  },
  button: {
    backgroundColor: colors.ROJO_PRINCIPAL,
  },
});
export default styles;
