import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

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
