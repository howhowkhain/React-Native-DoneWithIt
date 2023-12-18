import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import { AppForm, FormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {
          <>
            <FormField
              autoCapitalize={"none"}
              autoCorrect={false}
              icon={"email"}
              keyboardType={"email-address"}
              name="email"
              placeholder="Email"
              textContentType={"emailAddress"}
            />
            <FormField
              autoCapitalize={"none"}
              autoCorrect={false}
              icon={"lock"}
              name="password"
              placeholder="Password"
              secureTextEntry={true}
              textContentType={"password"}
            />
            <SubmitButton title="Login" />
          </>
        }
      </AppForm>
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
