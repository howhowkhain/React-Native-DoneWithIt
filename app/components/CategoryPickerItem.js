import React from "react";
import Icon from "./Icon";
import { View, StyleSheet } from "react-native";
import Text from "./AppText/Text";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon name={item.icon} size={80} backgroundColor={item.backgroundColor} />
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
