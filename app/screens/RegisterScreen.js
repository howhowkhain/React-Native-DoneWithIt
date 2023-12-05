import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  return (
    <>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {
          <>
            <AppFormField
              autoCapitalize={"none"}
              autoCorrect={false}
              icon={"account"}
              name="name"
              placeholder="Name"
              textContentType={"username"}
            />
            <AppFormField
              autoCapitalize={"none"}
              autoCorrect={false}
              icon={"email"}
              keyboardType={"email-address"}
              name="email"
              placeholder="Email"
              textContentType={"emailAddress"}
            />
            <AppFormField
              autoCapitalize={"none"}
              autoCorrect={false}
              icon={"lock"}
              name="password"
              placeholder="Password"
              secureTextEntry={true}
              textContentType={"password"}
            />
            <SubmitButton title="Register" />
          </>
        }
      </AppForm>
    </>
  );
}

export default RegisterScreen;
