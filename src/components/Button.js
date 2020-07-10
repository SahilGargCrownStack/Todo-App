import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const Button = ({ title, onClick, style, isEnabled = true }) => {

    const backgroundColorStyle = isEnabled
        ? { backgroundColor: 'red' }
        : { backgroundColor: 'lightgrey' }

    return (
        <View style={style ? style : null}>
            <TouchableOpacity style={[styles.container, backgroundColorStyle]} onPress={onClick} disabled={!isEnabled}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 30
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default Button;