import { createStackNavigator } from "@react-navigation/stack";
import MyAccountScreen from "../screens/MyAccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="AccountDetails"
      component={MyAccountScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen name="Messages" component={MessagesScreen}></Stack.Screen>
  </Stack.Navigator>
);

export default AccountNavigator;
