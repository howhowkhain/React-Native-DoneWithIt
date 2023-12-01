import { StyleSheet, Switch, TextInput } from "react-native";

import Screen from "./app/components/Screen";
import colors from "./app/config/colors";
import { useState } from "react";

import AppPicker from "./app/components/AppPicker";

export default function App() {
  const [category, setCategory] = useState(null);

  return (
    <Screen style={styles.screen}>
      <AppPicker
        placeholder={"Category"}
        icon="apps"
        selecteItem={category}
        onSelectedItem={(item) => setCategory(item)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    padding: 20,
  },
});
