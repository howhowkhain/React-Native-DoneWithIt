import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText/AppText";

import colors from "../config/colors";

const ListItem = ({
  image,
  iconName,
  title,
  subTitle,
  onPress,
  renderRightActions,
  color,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {image && <Image style={styles.image} source={image} />}
          {iconName && (
            <View style={[styles.icon, { backgroundColor: color }]}>
              <MaterialCommunityIcons
                name={iconName}
                size={25}
                color={colors.white}
              />
            </View>
          )}
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 15,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    // color: colors.white,
    // borderRadius: 18,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
    fontSize: 18,
  },
});

export default ListItem;
