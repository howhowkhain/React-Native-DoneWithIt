import { View, StyleSheet, Image, Text } from "react-native";

const AppCard = ({ title, subTitle, image }) => {
  return (
    // <View style={styles.container}>
    <View style={styles.card}>
      <Image style={styles.image} source={image} resizeMode="cover" />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "#f8f4f4",
  //   width: "100%",
  //   height: "50%",
  //   alignSelf: "flex-start",

  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "flex-start",
  // },
  card: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "90%",
    // height: "50%",
    backgroundColor: "#fff",
    marginBottom: 20,
    marginTop: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomEndRadius: 30,
  },
  image: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    height: "75%",
  },
  text: {
    flex: 1,
    justifyContent: "space-between",
    alignContent: "flex-start",
    padding: 20,
  },
  title: {
    alignSelf: "flex-start",
  },
  subTitle: {
    alignSelf: "flex-start",
    color: "blue",
  },
});

export default AppCard;
