import React from "react";
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

function ButtonCustom({ children, style, color }) {
  const colors = { backgroundColor: color };

  return (
    <View style={{ ...style, ...colors }}>
      <Pressable style={styles.button} onPress={() => alert("Hello!")}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    verticalAlign: "middle",
  },
});

export default ButtonCustom;
