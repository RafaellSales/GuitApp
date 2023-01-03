import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderColor: "#008000",
    borderWidth: 5,
  },
  content: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    // backgroundColor: "#FFF",
  },
  header: {
    marginBottom: 4,
    alignItems: "center",
  },
  status: {
    width: 10,
    // backgroundColor: '#5bc0de',
    backgroundColor: "#008000",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  label: {
    fontSize: 16,
    marginLeft: 3,
    color: "#fff",
  },
});
