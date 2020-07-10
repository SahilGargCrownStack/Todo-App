import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Divider from './Divider';
import { MaterialIcons } from '@expo/vector-icons';

const LanguageListItem = ({ selectedLanguage, languageDetail, onItemClick }) => {

    const getSelectionImageName = () => {
        if (selectedLanguage == languageDetail.languageCode) {
            return 'check-box';
        }
        else {
            return 'check-box-outline-blank';
        }
    };

    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                onPress={() => onItemClick()}>
                <Text style={styles.text}>{languageDetail.languageName}</Text>
                <MaterialIcons name={getSelectionImageName()} size={24} color="black" />
            </TouchableOpacity>
            <Divider />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: 'row'
    },
    text: {
        fontSize: 18,
        flex: 1
    }
});

export default LanguageListItem;