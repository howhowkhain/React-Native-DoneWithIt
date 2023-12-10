import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText/AppText";

import colors from "../../config/colors";

const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  showChevron = false,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle} numberOfLines={8}>
                  {subTitle}
                </AppText>
              )}
            </View>
          </View>
          {showChevron && (
            <View style={styles.chevron}>
              <MaterialCommunityIcons
                name="chevron-right"
                size={32}
                color={colors.medium}
              />
            </View>
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  chevron: {
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    justifyContent: "space-between",
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  leftContainer: {
    flexDirection: "row",
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
