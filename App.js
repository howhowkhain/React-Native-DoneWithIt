import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, TouchableNativeFeedback, Button, Alert } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={{backgroundColor: 'orange'}}/>
      <Button 
        title='Click me' 
        color={'orange'} 
        onPress={() => Alert.alert('My title', 'My message', [
          {text: 'Yes', onPress: () => console.log('Yes')},
          {text: 'No', onPress: () => console.log('No')}
        ])}
        // onPress={() => Alert.prompt('My title', 'My message', (text) => console.log(text))}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  // image: {
  //   width: 100,
  //   height: 100,
  // }
});
