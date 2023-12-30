import React from "react";
import { FlatList } from "react-native";
import Card from "../components/Card";
import routes from "../navigation/routes";

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

function ListingsScreen({ navigation }) {
  return (
    <FlatList
      data={listings}
      keyExtractor={(listing) => listing.id.toString()}
      renderItem={({ item }) => (
        <Card
          title={item.title}
          subTitle={"$" + item.price}
          image={item.image}
          onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
        />
      )}
    />
  );
}

export default ListingsScreen;
