import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppTextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        icon={"email"}
        keyboardType={"email-address"}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        textContentType={"emailAddress"}
      />
      <AppTextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        icon={"lock"}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        textContentType={"password"}
        secureTextEntry={true}
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    marginTop: 80,
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default LoginScreen;
