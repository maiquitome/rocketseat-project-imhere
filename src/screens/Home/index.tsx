import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
        // keyboardType="ascii-capable" ONLY IOS
        // keyboardType="visible-password" ONLY ANDROID
      />

      <StatusBar style="auto" />
    </View>
  );
}
