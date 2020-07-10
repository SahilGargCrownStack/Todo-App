import React, { useEffect, useContext } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import R from 'res/R';
import TodoListForm from '../components/todo_list/ToDoListForm';
import { Context as TodoContext } from '../context/TodoContext';

const MainScreen = ({ navigation }) => {
    const { state, getTodoList } = useContext(TodoContext);

    useEffect(() => {
        getTodoList();
    }, [state]);

    return (
        <SafeAreaView style={styles.container} >
            <Header
                title={R.strings.app_name}
                showOptionMenu={true}
                onLanguageMenuClick={() => {
                    
                }} />
            <TodoListForm data={state.todoList} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    text: {
        fontSize: 28,
        margin: 10,
    }
});

export default MainScreen;