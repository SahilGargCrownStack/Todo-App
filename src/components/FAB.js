import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const FAB = ({ onClick }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onClick}>
            <Entypo name="plus" size={24} color="white" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: 'red',
        position: 'absolute',
        right: 0,
        bottom: 0,
        margin: 16,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default FAB;