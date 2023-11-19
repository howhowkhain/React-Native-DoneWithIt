import {
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        flex: -1,
        width: 300,
        height: 100,
        // flexShrink: 1,
        // flexGrow: 1,
        // alignSelf: "flex-start"
      }}>
      </View>
      <View style={{
        backgroundColor: "gold",
        // flex: 1,
        width: 100,
        height: 100,
      }}/>
      <View style={{
        backgroundColor: "tomato",
        // flex: 1,
        width: 100,
        height: 100,
      }}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // flexWrap: "wrap",
    // alignContent: "center"

  }
})
