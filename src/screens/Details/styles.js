import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#373D98",
  },
  lista: {
    flex: 1,
    padding: 10,
  },
  scroll: {
    paddingBottom: 150,
  },
  picture: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    margin: 24,
    padding: 5,
  },
  camera: {
    width: Dimensions.get("screen").width - 58,
    height: 300,
  },
  player: {
    width: "100%",
    backgroundColor: "#FFF",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "900",
    color: "#fff",
  },
  sticker: {
    backgroundColor: "#373D98",
  },
  retry: {
    color: "#FFF",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 22,
    marginBottom: 10,
  },
});
