import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { View, BackHandler } from "react-native";
import { styles } from "./styles";
import TextInput from "../../components/TextInput";
import { Logo } from "../../components/Logo";
import { api } from "../../services/api";

export default function Home() {
  const [userName, setUserName] = useState("");
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);

  async function loadUser() {
    try {
      setIsLoading(true);
      const response = await api.get(userName);
      let userData = response.data;
      setIsLoading(false);
      navigation.navigate("Details", { userData });
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Logo />
      <TextInput
        icon="github"
        onChangeText={(e) => setUserName(e)}
        placeholder="Digite o nome do usuário"
      />
      <Button
        title="Buscar"
        loading={isLoading}
        disabled={isLoading}
        onPress={loadUser}
      />
    </View>
  );
}
