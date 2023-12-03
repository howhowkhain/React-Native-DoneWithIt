import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../components/AppText/AppText";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              name="email"
              autoCapitalize={"none"}
              autoCorrect={false}
              icon={"email"}
              keyboardType={"email-address"}
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContentType={"emailAddress"}
            />
            <AppText style={{ color: "red" }}>{errors.email}</AppText>
            <AppTextInput
              name="password"
              autoCapitalize={"none"}
              autoCorrect={false}
              icon={"lock"}
              placeholder="Password"
              onChangeText={handleChange("password")}
              textContentType={"password"}
              secureTextEntry={true}
            />
            <AppText style={{ color: "red" }}>{errors.password}</AppText>
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
