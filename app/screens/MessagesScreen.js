import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initalMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initalMessages);
  const [refresh, setRefresh] = useState(false);

  const handleDelete = (item) => {
    // delete message from local state of messages
    setMessages(messages.filter((message) => message.id !== item.id));
  };

  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
          onPress={() => console.log("Item pressed!", item)}
          renderRightActions={() => (
            <ListItemDeleteAction onPress={() => handleDelete(item)} />
          )}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
      refreshing={refresh}
      onRefresh={() => {
        setMessages([
          {
            id: 2,
            title: "T2",
            description: "D2",
            image: require("../assets/mosh.jpg"),
          },
        ]);
      }}
    />
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
