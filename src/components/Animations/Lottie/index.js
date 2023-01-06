import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";

export function Lottie({ ...rest }) {
  const animation = useRef(null);

  useEffect(() => {
    animation.current?.play();
  }, []);

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
