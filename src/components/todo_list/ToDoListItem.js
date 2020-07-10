import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import R from 'res/R';
import { MaterialIcons } from '@expo/vector-icons';

const ToDoListItem = ({ title, note, onItemClick, onDeleteItem }) => {

    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                onPress={onItemClick}>
                <View style={{ flex: 1, paddingEnd: 10 }}>
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
                    <Text style={styles.note} numberOfLines={1} ellipsizeMode='tail'>{note}</Text>
                </View>
                <TouchableOpacity
                    onPress={onDeleteItem}>
                    <MaterialIcons name="delete" size={24} color="black" />
                </TouchableOpacity>
            </TouchableOpacity>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 10,
        flexDirection: 'row'
    },
    title: {
        fontSize: 16,
    },
    note: {
        fontSize: 13,
        marginTop: 4,

        color: R.colors.primaryColor
    }
});

export default ToDoListItem;