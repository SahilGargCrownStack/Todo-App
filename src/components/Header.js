import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import R from 'res/R';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title, showOptionMenu, showBackButton }) => {
    const navigation = useNavigation();

    const renderMenuItem = () => {
        return (
            <TouchableOpacity
                style={styles.menu}
                onPress={() => navigation.navigate(R.routes.languages)}>
                <FontAwesome name="language" size={24} color="white" />
            </TouchableOpacity>
        );
    }

    const renderBackButton = () => {
        return (
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                    navigation.goBack();
                }}>
                <MaterialIcons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            {showBackButton ? renderBackButton() : null}
            <Text style={styles.title}>{title}</Text>
            {showOptionMenu ? renderMenuItem() : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 54,
        backgroundColor: R.colors.primaryColor,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center'
    },
    menu: {
        position: 'absolute',
        right: 0,
        marginRight: 10
    },
    backButton: {
        position: 'absolute',
        left: 0,
        marginLeft: 10
    }
});

export default Header;