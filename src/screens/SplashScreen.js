import React, { useContext, useEffect, useCallback, useRef } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import * as Strings from '../../app.json';
import R from 'res/R';
import { Context as TodoContext } from '../context/TodoContext';

const SPLASH_DELAY = 2000;

const SplashScreen = ({ navigation }) => {
    const { state, getAppLanguageCode } = useContext(TodoContext);
    const isScreenShowing = useRef(false);

    useEffect(() => {
        isScreenShowing.current = true;
        getAppLanguageCode();
    }, []);

    const showMainScreen = useCallback(() => {
        setTimeout(() => {
            navigation.replace(R.routes.home);
        }, SPLASH_DELAY);
    }, []);

    if (isScreenShowing.current && state.appLanguageCode) {
        isScreenShowing.current = false;
        showMainScreen();
    }

    return (
        <View style={styles.container} >
            <Image style={styles.image} source={R.images.app_icon} />
            <Text style={styles.text}>{Strings.displayName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    image: {
        width: 150,
        height: 150
    },
    text: {
        fontSize: 28,
        margin: 10,
        fontStyle: 'italic'
    }
});

export default SplashScreen;