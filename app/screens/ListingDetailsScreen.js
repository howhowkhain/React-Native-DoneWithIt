import { View, StyleSheet, Image, Text } from "react-native";
import Card from "../components/Card";
import ListItem from "../components/lists/ListItem";

import colors from "../config/colors";

const ListingDetailsScreen = ({ route }) => {
  const { title, price, images } = route.params;

  return (
    <View>
      <Image style={styles.image} source={{ uri: images[0].url }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
