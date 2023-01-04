import React, { forwardRef } from "react";
import { TextInput as RNTextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

const TextInput = forwardRef(({ icon, error, touched, ...rest }, ref) => {
  // const validationColor = !touched ? "#223e4b" : error ? "red" : "#223e4b";
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <AntDesign name={icon} color="#223e4b" size={16} />
      </View>
      <View style={styles.input}>
        <RNTextInput
          allowFontScaling={false}
          returnKeyType="next"
          returnKeyLabel="next"
          underlineColorAndroid="transparent"
          placeholderTextColor="rgba(34, 62, 75, 0.7)"
          ref={ref}
          {...rest}
        />
      </View>
    </View>
  );
});

export default TextInput;
