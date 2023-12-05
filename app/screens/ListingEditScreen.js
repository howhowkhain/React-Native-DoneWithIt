import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import defaultStyles from "../config/styles";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppPicker from "../components/AppPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number()
    .required()
    .positive()
    .integer()
    .min(1)
    .max(10000)
    .label("Price"),
  category: Yup.object().required().label("Category"),
  description: Yup.string().label("Description"),
});

function ListingEditScreen(props) {
  const [selectedCategory, setSelectedCategory] = useState();
  return (
    <>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {
          <>
            <AppFormField
              autoCapitalize={"none"}
              autoCorrect={false}
              name="title"
              placeholder="Title"
              textContentType={"jobTitle"}
            />
            <AppFormField
              autoCapitalize={"none"}
              autoCorrect={false}
              keyboardType={"numeric"}
              name="price"
              placeholder="Price"
              textContentType={"none"}
            />
            <AppPicker
              onSelectedItem={(item) => setSelectedCategory(item)}
              selecteItem={selectedCategory}
              placeholder={"Category"}
              style={{
                ...defaultStyles.text,
                color: defaultStyles.colors.medium,
              }}
            />
            {/* <AppFormField
              autoCapitalize={"none"}
              autoCorrect={false}
              name="title"
              placeholder="Title"
              textContentType={"emailAddress"}
            /> */}
            <AppFormField
              autoCapitalize={"none"}
              autoCorrect={false}
              name="description"
              placeholder="Description"
              textContentType={"none"}
            />
            <SubmitButton title="Post" />
          </>
        }
      </AppForm>
    </>
  );
}

export default ListingEditScreen;
