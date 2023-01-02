import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
  Image,
} from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { Button } from "../Button";

export default function User({
  login,
  avatar_url,
  followers,
  following,
  location,
}) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: avatar_url
            ? avatar_url
            : "https://images.gutefrage.net/media/fragen/bilder/meine-kamera-auf-windows-10-funktioniert-nicht-was-tun/0_big.jpg?v=1584606917000",
        }}
        style={styles.img}
      />
      <Text style={styles.title}>{login}</Text>
      <View style={styles.content}>
        <Text style={styles.title}>{location}</Text>
        <Feather name="map-pin" size={18} color="#fff" />
      </View>
      <View style={styles.content}>
        <View style={styles.itens}>
          <Text style={styles.title}>Seguidores</Text>
          <Text style={styles.title}>{followers}</Text>
        </View>
        <View style={styles.itens}>
          <Text style={styles.title}>Seguindo</Text>
          <Text style={styles.title}>{following}</Text>
        </View>
      </View>
    </View>
  );
}
