import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

import AppText from "./app/components/AppText";

export default function App() {
  return (
    // <WelcomeScreen/>
    // <ViewImageScreen/>
    <View style={styles.container}>
      <AppText>My React Native App</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
