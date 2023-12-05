import { StyleSheet, Switch, TextInput } from "react-native";

import Screen from "./app/components/Screen";
import colors from "./app/config/colors";
import { useState } from "react";

import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  const [category, setCategory] = useState(null);

  return (
    <Screen style={styles.screen}>
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      <ListingEditScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    padding: 20,
  },
});
