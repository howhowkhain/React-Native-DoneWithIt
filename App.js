import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Switch,
  Text,
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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Button
        title="View Tweet"
        onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
      ></Button>
      {/* <Link /> */}
    </Screen>
  );
};

const TweetDetails = ({ route }) => {
  return (
    <Screen>
      <Text>Tweet Details {route.params.id}</Text>
    </Screen>
  );
};

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Tweets">
      <Stack.Screen name="Tweet" component={Tweets} />
      <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
  );
};

export default function App() {
  const [category, setCategory] = useState(null);
  const [imageUris, setImageUris] = useState([]);

  // const handleAdd = (uri) => {
  //   setImageUris([...imageUris, uri]);
  // };

  // const handleRemove = (uri) => {
  //   setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  // };

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    // <Screen style={styles.screen}>
    //   {/* <ImageInputList
    //     imageUris={imageUris}
    //     onAddImage={handleAdd}
    //     onRemoveImage={handleRemove}
    //   /> */}
    //   {/* <LoginScreen /> */}
    //   {/* <RegisterScreen /> */}
    //   {/* <ListingEditScreen /> */}
    //   {/* <GestureHandlerRootView>
    //     <MessagesScreen />
    //   </GestureHandlerRootView> */}
    // </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    padding: 20,
  },
});
