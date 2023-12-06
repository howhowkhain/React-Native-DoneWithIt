import React from "react";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

function AppFormPicker({ name, ...others }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        {...others}
        onSelectedItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
