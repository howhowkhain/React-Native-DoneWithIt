import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Switch,
  TextInput,
} from "react-native";

import Screen from "./app/components/Screen";
import colors from "./app/config/colors";
import { useEffect, useState } from "react";

import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [category, setCategory] = useState(null);
  const [imageAssets, setImageAssets] = useState(null);

  const requestPermissions = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        console.log(result.assets);
        setImageAssets(result.assets);
      }
    } catch (error) {
      console.log("Error for selecting an image", error);
    }
  };

  return (
    <Screen style={styles.screen}>
      <Button title="Select Image" onPress={selectImage} />
      <FlatList
        data={imageAssets}
        keyExtractor={(item) => item.uri}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.uri }}
            style={{ width: 200, height: 200 }}
          />
        )}
      />
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <ListingEditScreen /> */}
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
