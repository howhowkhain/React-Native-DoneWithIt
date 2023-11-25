import { View, StyleSheet, Image, Text } from "react-native";
import AppCard from "../components/AppCard";

const ListingScreen = () => {
  return (
    <View style={styles.container}>
      <AppCard
        title={"Red Jacket for sale!"}
        subTitle={"$100"}
        image={require("../assets/jacket.jpg")}
      />
      <View style={styles.details}>
        <Image
          style={styles.image}
          source={require("../assets/mosh.jpg")}
          borderRadius={50}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Mosh Hamedani</Text>
          <Text style={styles.totalListings}>5 Listings</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  details: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
    width: "90%",
  },
  image: {
    width: 70,
    height: 70,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ListingScreen;
