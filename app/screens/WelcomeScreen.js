import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  useWindowDimensions,
  Platform,
} from "react-native";

import colors from "../config/colors";
import ButtonCustom from "../components/ButtonCustom";

function WelcomeScreen() {
  const { width, height } = useWindowDimensions();
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.title}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonCustom style={styles.loginBtn} color={colors.primary}>
          Login
        </ButtonCustom>
        <ButtonCustom style={styles.registerBtn} color={colors.secondary}>
          Register
        </ButtonCustom>
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
    width: "90%",
    alignItems: "center",
    paddingBottom: 30,
  },
  loginBtn: {
    width: "90%",
    height: 50,
    borderRadius: 30,
  },
  registerBtn: {
    width: "90%",
    height: 50,
    borderRadius: 30,
    marginTop: 20,
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
  title: {
    fontWeight: "800",
    fontSize: 21,
    marginTop: 20,
  },
});

export default WelcomeScreen;
