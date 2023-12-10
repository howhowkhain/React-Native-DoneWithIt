import React, { useState } from "react";
import {
  View,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Modal,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText/AppText";
import PickerItem from "./PickerItem";

function AppPicker({
  icon,
  items,
  onSelectedItem,
  placeholder,
  selectedItem,
  width,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {/* Touchable Picker */}
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={{ ...styles.container, width: width }}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      {/* Picker's modal */}
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)}></Button>
        <FlatList
          data={items}
          keyExtractor={(selection) => selection.value}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectedItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
