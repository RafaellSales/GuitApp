import { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { Text, View, FlatList } from "react-native";
import Repo from "../../components/Repo";
import { styles } from "./styles";

export default function Repos() {
  const route = useRoute();
  const user = route.params;
  const [repos, setRepos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadrepos() {
      setIsLoading(true);
      const res = await fetch(
        `https://api.github.com/users/${user.user.login}/repos`
      );
      const data = await res.json();
      // console.log(data);
      setIsLoading(false);
      let orderedRepos = data.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      );
      orderedRepos = orderedRepos.slice(0, 5);
      setRepos(orderedRepos);
    }
    loadrepos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Explore os repositórios do usuário: {user.user.login}
      </Text>
      {repos && repos.length === 0 && (
        <Text style={styles.name}>Não há repositórios.</Text>
      )}
      {repos && repos.length > 0 && (
        <FlatList
          data={repos}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <Repo key={item.name} {...item} />}
          showsHorizontalScrollIndicator={false}
          // horizontal
        />
      )}
    </View>
  );
}
