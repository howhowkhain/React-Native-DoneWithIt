import { StyleSheet, Switch, TextInput } from "react-native";

import Screen from "./app/components/Screen";
import colors from "./app/config/colors";
import AppTextInput from "./app/components/AppTextInput";
import { useState } from "react";

export default function App() {
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen style={styles.screen}>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    padding: 20,
  },
});
