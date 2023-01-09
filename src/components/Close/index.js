import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

export function Close({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AntDesign name="close" size={24} color="#fff" />
    </TouchableOpacity>
  );
}
