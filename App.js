import { StyleSheet, Switch, TextInput } from "react-native";

import Screen from "./app/components/Screen";
import colors from "./app/config/colors";
import { useState } from "react";

import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  const [category, setCategory] = useState(null);

  return (
    <Screen style={styles.screen}>
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      <ListingEditScreen />
      {/* <GestureHandlerRootView>
        <MessagesScreen />
      </GestureHandlerRootView> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    padding: 20,
  },
});
