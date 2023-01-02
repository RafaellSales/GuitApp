import React from "react";
import { Image, StyleSheet, View } from "react-native";

export function Logo() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    margin: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 166,
    height: 140,
  },
});
