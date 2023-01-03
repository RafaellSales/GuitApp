import { useState, useEffect } from "react";
import User from "../../components/User";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "../../components/Button";
import * as WebBrowser from "expo-web-browser";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { Close } from "../../components/Close";
import { Card } from "../../components/Card";
import { Lottie } from "../../components/Animations/Lottie";
import Loading from "../../assets/animations/guit.json";

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
    setIsLoading(true);
    const res = await fetch(
      `https://api.github.com/users/${userData.userData.login}/repos`
    );
    const data = await res.json();
    // console.log(data);
    let orderedRepos = data.sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    );
    orderedRepos = orderedRepos.slice(0, 5);
    setRepos(orderedRepos);
    setIsLoading(false);
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
            // showsHorizontalScrollIndicator={false}
            // horizontal
          />
        )}
      </View>
      <Button title="Nova consulta" onPress={handleHome} />
    </View>
  );
}
