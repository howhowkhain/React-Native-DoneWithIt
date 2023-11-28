import React from "react";
import { View, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

import ListItem from "../components/ListItem";

const myAccountsElements = [
  {
    id: 1,
    title: "Mosh hamedani",
    subtitle: "programmingwithmosh@gmail.com",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "My Listings",
    subtitle: "",
    iconName: "format-list-bulleted",
    color: colors.primary,
  },
  {
    id: 3,
    title: "My Messages",
    subtitle: "",
    iconName: "email",
    color: colors.secondary,
  },
  {
    id: 4,
    title: "Log Out",
    subtitle: "",
    iconName: "logout",
    color: colors.lemon,
  },
];

function MyAccountScreen(props) {
  return (
    <FlatList
      data={myAccountsElements}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ListItem
          {...(item.image && { image: item.image })}
          {...(item.iconName && { iconName: item.iconName })}
          title={item.title}
          subTitle={item.subtitle}
          {...(item.color && { color: item.color })}
        />
      )}
    />
  );
}

export default MyAccountScreen;
