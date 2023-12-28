import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { Form, FormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  return (
    <>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {
          <>
            <FormField
              autoCapitalize={"none"}
              autoCorrect={false}
              icon={"account"}
              name="name"
              placeholder="Name"
              textContentType={"username"}
            />
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
            <SubmitButton title="Register" />
          </>
        }
      </Form>
    </>
  );
}

export default RegisterScreen;
