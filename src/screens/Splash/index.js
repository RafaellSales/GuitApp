import { useEffect } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Lottie } from "../../components/Animations/Lottie";
import load from "../../assets/animations/load.json";

export default function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Lottie source={load} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.name}>GuitHub App</Text>
      </View>
    </View>
  );
}
