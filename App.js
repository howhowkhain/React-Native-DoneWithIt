import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Button,
  Platform,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton";
import AppCard from "./app/components/AppCard";
import colors from "./app/config/colors";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  return (
    <Screen style={styles.screen}>
      <GestureHandlerRootView>
        {/* <MessagesScreen /> */}
        {/* <MyAccountScreen /> */}
        <ListingsScreen />
      </GestureHandlerRootView>
    </Screen>
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <ListingDetailsScreen />
    // <View style={styles.container}>
    //   {/* <AppText>My React Native App</AppText> */}
    //   {/* <MaterialCommunityIcons name="email" size={60} color={"dodgerblue"} /> */}
    //   {/* <AppButton
    //     title="Login"
    //     onPress={() => console.log("Pressed")}
    //   /> */}
    //   {/* <AppCard
    //     title="Red Jacket for sale!"
    //     subTitle="$100"
    //     image={require("./app/assets/jacket.jpg")}
    //   /> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: colors.light,
    padding: 20,
    paddingTop: 100,
  },
});
