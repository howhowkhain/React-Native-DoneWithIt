import "react-native-gesture-handler";

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

// import LoginScreen from "./app/screens/LoginScreen";
// import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <Text>Tweet</Text>
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

const Account = () => {
  return (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );
};

const StackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Tweets"
      screenOptions={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Tweets"
        component={Tweets}
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={({ route }) => ({ title: `Tweet ${route.params.id}` })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "#eee",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default function App() {
  const netInfo = useNetInfo();
  console.log(netInfo);
  // const [category, setCategory] = useState(null);
  // const [imageUris, setImageUris] = useState([]);

  // const handleAdd = (uri) => {
  //   setImageUris([...imageUris, uri]);
  // };

  // const handleRemove = (uri) => {
  //   setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  // };

  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <StackNavigator /> */}
      {/* <TabNavigator /> */}
      {/* <AuthNavigator /> */}
      <AppNavigator />
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
