import { Image, StyleSheet, View, StatusBar } from 'react-native';

import colors from '../config/colors'

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.btnsContainer}>
                <View style={styles.closeIcon}></View>
                <View style={styles.deleteIcon}></View>
            </View>
            <Image 
                style={styles.image}
                source={require('../assets/chair.jpg')}
                resizeMode='contain'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    btnsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        position: 'absolute',
        width: "100%",
        top: 40
    },
    closeIcon: {
        backgroundColor: colors.primary,
        width: 50,
        height: 50,
        left: 30
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteIcon: {
        backgroundColor: colors.secondary,
        width: 50,
        height: 50,
        right: 30
    },
    image: {
        width: "100%",
        height: "100%"
    }
})

export default ViewImageScreen;