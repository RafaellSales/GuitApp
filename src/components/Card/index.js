import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

export function Card({
  onPress,
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text allowFontScaling={false} style={styles.title}>
            {name}
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.info}>
            <AntDesign name="codesquareo" size={13} color="#FFF" />
            <Text allowFontScaling={false} style={styles.label}>
              {language}
            </Text>
          </View>
          <View style={styles.info}>
            <Feather name="star" size={13} color="#fff" />
            <Text allowFontScaling={false} style={styles.label}>
              {stargazers_count}
            </Text>
          </View>
          <View style={styles.info}>
            <Feather name="share-2" size={13} color="#fff" />
            <Text allowFontScaling={false} style={styles.label}>
              {forks_count}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
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
