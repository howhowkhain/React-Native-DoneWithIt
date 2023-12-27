import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../../config/colors";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontFamily: "Roboto",
    fontSize: 20,
  },
});

export default AppText;