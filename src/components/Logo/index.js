import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";

export function Logo() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.image} />
    </View>
  );
}
