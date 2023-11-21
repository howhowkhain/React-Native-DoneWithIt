import React from "react";
import { Platform, Text } from "react-native";

function AppText({ children }) {
  return (
    <Text
      style={{
        fontSize: 18,
        fontFamily: Platform.OS === "Android" ? "Roboto" : "Avenir",
      }}
    >
      {children}
    </Text>
  );
}

export default AppText;
