import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Card from "../components/Card";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText/Text";
import Screen from "../components/Screen";
import Button from "../components/Button";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    console.log(response);
    if (!response.ok) return setError(true);
    setError(false);
    setListings(response.data);
  };

  return (
    <>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </>
  );
}

export default ListingsScreen;
