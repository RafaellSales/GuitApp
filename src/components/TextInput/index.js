import React, { forwardRef } from "react";
import { TextInput as RNTextInput, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const TextInput = forwardRef(({ icon, error, touched, ...rest }, ref) => {
  const validationColor = !touched ? "#223e4b" : error ? "red" : "#223e4b";
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        height: 56,
        maxHeight: 56,
        borderRadius: 8,
        margin: 12,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ padding: 7 }}>
        <AntDesign name={icon} color={validationColor} size={16} />
      </View>
      <View style={{ flex: 1 }}>
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
