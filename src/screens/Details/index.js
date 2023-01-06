import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { api } from "../../services/api";
import * as WebBrowser from "expo-web-browser";
import { Button } from "../../components/Button";
import User from "../../components/User";
import { Close } from "../../components/Close";
import { Card } from "../../components/Card";
import { Lottie } from "../../components/Animations/Lottie";
import Loading from "../../assets/animations/guit.json";

import { styles } from "./styles";

export default function Details() {
  const route = useRoute();
  const userData = route.params;
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setUser(userData.userData);
    loadrepos();
  }, []);

  async function loadrepos() {
    try {
      setIsLoading(true);
      let name = userData.userData.login;
      const response = await api.get(`${name}/repos`);
      setRepos(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  function handleHome() {
    navigation.navigate("Home");
  }
  async function handleWeb(url) {
    let result = await WebBrowser.openBrowserAsync(url);
  }

  return (
    <View style={styles.container}>
      <Close onPress={handleHome} />
      <User {...user} />
      <View style={styles.lista}>
        {isLoading ? (
          <Lottie source={Loading} />
        ) : (
          <FlatList
            data={repos}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <Card
                onPress={() => {
                  handleWeb(item.html_url);
                }}
                key={item.name}
                {...item}
              />
            )}
            ListHeaderComponent={
              <>
                <Text style={styles.name}>Repositórios publicos</Text>
              </>
            }
            ListEmptyComponent={
              <>
                <Text style={styles.name}>Não há repositórios publicos</Text>
              </>
            }
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
      <Button title="Nova consulta" onPress={handleHome} />
    </View>
  );
}
