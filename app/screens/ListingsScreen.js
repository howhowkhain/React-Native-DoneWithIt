import React from "react";
import { FlatList } from "react-native";
import AppCard from "../components/AppCard";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <FlatList
      data={listings}
      keyExtractor={(listing) => listing.id.toString()}
      renderItem={({ item }) => (
        <AppCard
          title={item.title}
          subTitle={"$" + item.price}
          image={item.image}
        />
      )}
    />
  );
}

export default ListingsScreen;
