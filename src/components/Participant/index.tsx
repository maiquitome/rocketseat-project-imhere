import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
};

export function Participant(/* props */ { name }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {/* {props.name} */}
        {name}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
