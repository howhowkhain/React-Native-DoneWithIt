import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  Platform,
} from "react-native";

import Button from "../components/Button";

function WelcomeScreen({ navigation }) {
  const { width, height } = useWindowDimensions();

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    paddingBottom: 30,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
