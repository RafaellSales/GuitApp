import { TouchableOpacity, Text } from "react-native";
import { ActivityIndicator } from "react-native";

import { styles } from "./styles";

export function Button({ title, loading = false, ...rest }) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {loading ? (
        <ActivityIndicator color="#fff" size={32} />
      ) : (
        <Text allowFontScaling={false} style={styles.title}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
