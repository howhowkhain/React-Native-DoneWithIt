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

const selections = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Toys", value: 3 },
];

function AppPicker({ icon, onSelectedItem, placeholder, selecteItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {/* Touchable Picker */}
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selecteItem ? selecteItem.label : placeholder}
          </AppText>
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
          data={selections}
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
  text: {
    flex: 1,
  },
});

export default AppPicker;
