import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  console.log('aaa');
  console.log(require('./assets/icon.png'))
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native</Text>
      <Image source={require('./assets/icon.png')}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  image: {
    width: 200,
    height: 200,
  }
});
