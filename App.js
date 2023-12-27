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
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [category, setCategory] = useState(null);
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Screen style={styles.screen}>
      {/* <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      /> */}
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
