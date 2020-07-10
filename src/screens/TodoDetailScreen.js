import React, { useContext, useCallback } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/Header';
import R from 'res/R';
import { Context as TodoContext } from '../context/TodoContext';
import Button from '../components/Button';

const TodoDetailScreen = ({ navigation, route }) => {
    const { state, deleteTodoItem } = useContext(TodoContext);

    const selectedTodoItem = state.todoList.find((item) => item.id === route.params?.id);

    const showTodoItemData = useCallback(() => {
        return (
            <ScrollView>
                <Text style={styles.title}>{R.strings.title}</Text>
                <Text style={styles.detail}>{selectedTodoItem.title}</Text>
                <Text style={styles.title}>{R.strings.note}</Text>
                <Text style={styles.detail}>{selectedTodoItem.note}</Text>
            </ScrollView>
        );
    }, [selectedTodoItem]);

    return (
        <SafeAreaView style={styles.mainContainer} >
            <Header
                title={R.strings.todo_detail}
                showBackButton={true} />
            <View style={styles.container} >
                {selectedTodoItem ? showTodoItemData() : <View style={{ flex: 1 }} />}
                <View style={{ flexDirection: 'row' }}>
                    <Button
                        style={{ flex: 1, marginEnd: 10 }}
                        title={R.strings.edit_todo}
                        onClick={() => navigation.navigate(R.routes.editToDo, { id: route.params?.id })} />
                    <Button
                        style={{ flex: 1 }}
                        title={R.strings.delete_todo}
                        onClick={() => deleteTodoItem(route.params?.id, () => { navigation.goBack(); })} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        padding: 10
    },
    title: {
        fontSize: 18,
        paddingVertical: 10,
        fontWeight: 'bold'
    },
    detail: {
        marginBottom: 20
    }
});

export default TodoDetailScreen;