import { TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

export function Close({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AntDesign name="arrowleft" size={24} color="#fff" />
    </TouchableOpacity>
  );
}
