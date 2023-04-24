import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 20 + getStatusBarHeight(),
    left: 16,
  },
});
