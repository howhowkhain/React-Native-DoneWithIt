import { Text, StyleSheet, Pressable } from "react-native";
import colors from "../config/colors";

function Button({ title, onPress, color = "primary" }) {
  return (
    <Pressable
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    verticalAlign: "middle",
    textTransform: "uppercase",
    fontWeight: "bold",
    color: colors.white,
  },
});

export default Button;
