import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function MyAccountScreen(props) {
  return (
    // <Icon
    //   name={"format-list-bulleted"}
    //   size={50}
    //   iconColor={colors.white}
    //   backgroundColor={colors.primary}
    // />
    <View>
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamedani"
          subTitle={"programmingwithmosh@gmail.com"}
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <FlatList
        data={menuItems}
        keyExtractor={(menuItem) => menuItem.title}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            IconComponent={
              <Icon
                name={item.icon.name}
                backgroundColor={item.icon.backgroundColor}
              />
            }
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
      <View style={styles.container}>
        <ListItem
          title={"Log Out"}
          IconComponent={
            <Icon name={"logout"} backgroundColor={colors.lemon} />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default MyAccountScreen;
