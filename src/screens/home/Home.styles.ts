import { StyleSheet, Platform } from "react-native";

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
});
export default styles;
