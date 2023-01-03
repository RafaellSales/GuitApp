import React, { useRef, useCallback } from "react";
import LottieView from "lottie-react-native";
import { useFocusEffect } from "@react-navigation/native";

export function Lottie({ ...rest }) {
  const animation = useRef(null);

  useFocusEffect(
    useCallback(() => {
      animation.current?.play();
    }, [])
  );

  return (
    <LottieView
      style={{
        width: 250,
        height: 250,
        alignSelf: "center",
        marginTop: 20,
      }}
      ref={animation}
      // loop={false}
      autoSize
      resizeMode="cover"
      {...rest}
    />
  );
}
