import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import defaultStyles from "../config/styles";
import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";

const categories = [
  {
    label: "Furniture",
    value: 1,
    icon: "floor-lamp",
    backgroundColor: "#fc5c65",
  },
  { label: "Cars", value: 2, icon: "car", backgroundColor: "#fd9644" },
  { label: "Cameras", value: 3, icon: "camera", backgroundColor: "#fed330" },
  { label: "Games", value: 4, icon: "cards", backgroundColor: "#26de81" },
  {
    label: "Clothing",
    value: 5,
    icon: "shoe-heel",
    backgroundColor: "#2bcbba",
  },
  { label: "Sports", value: 6, icon: "basketball", backgroundColor: "#45aaf2" },
  {
    label: "Movies&Music",
    value: 7,
    icon: "headphones",
    backgroundColor: "#4b7bec",
  },
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
  images: Yup.array().min(1, "Please select at least one image!"),
});

function ListingEditScreen(props) {
  const location = useLocation();

  const onUploadProgress = (progress) => {
    console.log(progress);
  };

  const handleSubmit = async (listing) => {
    const result = await listingsApi.addListing(
      { ...listing, location },
      onUploadProgress
    );
    if (!result.ok) return alert("Could not save the listing.");

    alert("Success");
  };

  return (
    <>
      <Form
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {
          <>
            <FormImagePicker name="images" />
            <FormField maxLength={255} name="title" placeholder="Title" />
            <FormField
              maxLength={8}
              keyboardType={"numeric"}
              name="price"
              placeholder="Price"
              width={120}
            />
            <Picker
              items={categories}
              name="category"
              numberOfColumns={3}
              PickerItemComponent={CategoryPickerItem}
              placeholder={"Category"}
              style={{
                ...defaultStyles.text,
              }}
              width="50%"
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
      </Form>
    </>
  );
}

export default ListingEditScreen;
