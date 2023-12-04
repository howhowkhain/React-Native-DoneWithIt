import React from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";

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
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize={"none"}
              autoCorrect={false}
              icon={"email"}
              keyboardType={"email-address"}
              name="email"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              placeholder="Email"
              textContentType={"emailAddress"}
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              autoCapitalize={"none"}
              autoCorrect={false}
              icon={"lock"}
              name="password"
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              placeholder="Password"
              secureTextEntry={true}
              textContentType={"password"}
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
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
