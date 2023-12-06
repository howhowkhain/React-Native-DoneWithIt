import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

function ListItemDeleteAction({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="trash-can" size={35} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ListItemDeleteAction;
