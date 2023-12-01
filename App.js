import { StyleSheet, TextInput } from "react-native";

import Screen from "./app/components/Screen";
import colors from "./app/config/colors";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  return (
    <Screen style={styles.screen}>
      <AppTextInput icon={"email"} placeholder={"First Name"} />
      {/* <TextInput
        placeholder="First Name"
        maxLength={5}
        keyboardType="numeric"
      ></TextInput> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    padding: 20,
  },
});
