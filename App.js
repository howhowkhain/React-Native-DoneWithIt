import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Button,
  Platform,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText/AppText";
import ButtonCustom from "./app/components/ButtonCustom";
import AppCard from "./app/components/AppCard";
import colors from "./app/config/colors";

export default function App() {
  return (
    // <WelcomeScreen />
    // <ViewImageScreen/>
    <View style={styles.container}>
      {/* <AppText>My React Native App</AppText> */}
      {/* <MaterialCommunityIcons name="email" size={60} color={"dodgerblue"} /> */}
      {/* <ButtonCustom>Submit</ButtonCustom> */}
      <AppCard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f8f4f4'
  },
});
