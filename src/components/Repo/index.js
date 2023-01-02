import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import { styles } from "./styles";
import { Feather, AntDesign } from "@expo/vector-icons";

export default function Repo({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.heder}>
        <Text style={styles.hederTitle}>{name}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.itens}>
          <AntDesign name="codesquareo" size={24} color="#fff" />
          <Text style={styles.title}>{language}</Text>
        </View>
        <View style={styles.itens}>
          <Feather name="star" size={24} color="#fff" />
          <Text style={styles.title}>{stargazers_count}</Text>
        </View>
        <View style={styles.itens}>
          <Feather name="share-2" size={24} color="#fff" />
          <Text style={styles.title}>{forks_count}</Text>
        </View>
      </View>
      {/* <TouchableOpacity style={styles.itens}>
        <Text style={styles.title}>Ver código</Text>
      </TouchableOpacity> */}
    </View>
  );
}
