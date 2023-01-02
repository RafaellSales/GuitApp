import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { View, Text } from "react-native";
import { styles } from "./styles";
import TextInput from "../../components/TextInput";
import { Logo } from "../../components/Logo";

export default function Home() {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const navigation = useNavigation();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function loadUser() {
    setUser(null);
    setIsLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    setIsLoading(false);
    if (res.status === 404) {
      setError(true);
      return;
    }
    setError(false);
    const { avatar_url, login, location, followers, following } = data;
    const userData = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };
    setUser(userData);
    navigation.navigate("Details", { userData });
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
        loading={isLoading}
        title="Buscar"
        onPress={() => {
          loadUser();
        }}
      />
    </View>
  );
}
