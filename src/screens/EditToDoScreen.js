import React, { useContext } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import R from 'res/R';
import TodoForm from '../components/TodoForm';
import { Context as TodoContext } from '../context/TodoContext';

const EditToDoScreen = ({ navigation, route }) => {
    const { state, updateTodoItem } = useContext(TodoContext);

    const selectedTodoItem = state.todoList.find((item) => item.id === route.params?.id);

    return (
        <SafeAreaView style={styles.container} >
            <Header
                title={R.strings.edit_todo}
                showBackButton={true} />
            <View style={styles.container} >
                <TodoForm
                    type='edit'
                    initialValues={{ title: selectedTodoItem.title, note: selectedTodoItem.note }}
                    onSubmit={(title, note) => {
                        let todoItem = { id: route.params?.id, title, note };
                        updateTodoItem(todoItem, () => {
                            navigation.goBack();
                        });
                    }} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default EditToDoScreen;