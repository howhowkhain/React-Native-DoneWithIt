import { View, StyleSheet, Image } from 'react-native'


const AppCard = () => {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require('../assets/jacket.jpg')} resizeMode='contain'/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    height: '50%',
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginTop: 50,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  }
})

export default AppCard;