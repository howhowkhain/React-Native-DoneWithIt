import React from "react";
import * as Yup from "yup";
import defaultStyles from "../config/styles";
import {
  AppForm,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Toys", value: 3 },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number()
    .required()
    .positive()
    .integer()
    .min(1)
    .max(10000)
    .label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

function ListingEditScreen(props) {
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
            <FormField maxLength={255} name="title" placeholder="Title" />
            <FormField
              maxLength={8}
              keyboardType={"numeric"}
              name="price"
              placeholder="Price"
              width={"30%"}
            />
            <Picker
              items={categories}
              name="category"
              placeholder={"Category"}
              width={"50%"}
              style={{
                ...defaultStyles.text,
              }}
            />
            <FormField
              maxLength={255}
              multiline
              numberOfLines={3}
              name="description"
              placeholder="Description"
            />
            <SubmitButton title="Post" />
          </>
        }
      </AppForm>
    </>
  );
}

export default ListingEditScreen;
