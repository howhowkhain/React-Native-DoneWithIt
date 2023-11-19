import { useWindowDimensions } from 'react-native';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';

import colors from '../config/colors';

function WelcomeScreen() {
    const {width, height} = useWindowDimensions()
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
            resizeMode='cover'
        >
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo} />
                <Text style={styles.title}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginBtn}><Text>Login</Text></View>
            <View style={styles.registerBtn}><Text>Register</Text></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginBtn: {
        width: "100%",
        height: 70,
        backgroundColor: colors.primary
    },
    registerBtn: {
        width: "100%",
        height: 70,
        backgroundColor: colors.secondary,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        
    },
})

export default WelcomeScreen;
