import { useState, useEffect } from "react";
import User from "../../components/User";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { View } from "react-native";
import { styles } from "./styles";
import { Close } from "../../components/Close";

export default function Details() {
  const [user, setUser] = useState(null);
  const route = useRoute();
  const userData = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    setUser(userData.userData);
  }, []);

  function handleRepos() {
    navigation.navigate("Repos", { user });
  }

  return (
    <View style={styles.container}>
      <Close
        onPress={() => {
          navigation.navigate("home");
        }}
      />
      <User {...user} />
      <Button title="ver mais" onPress={handleRepos} />
    </View>
  );
}
