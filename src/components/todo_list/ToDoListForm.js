import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import ToDoListItem from './ToDoListItem';
import FAB from '../FAB';
import R from 'res/R';
import { useNavigation } from '@react-navigation/native';
import { Context as TodoContext } from '../../context/TodoContext';

const TodoListForm = ({ data }) => {
    const { deleteTodoItem } = useContext(TodoContext);
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <FlatList
                data={data}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item }) => {
                    return (
                        <ToDoListItem
                            title={item.title}
                            note={item.note}
                            onItemClick={() => navigation.navigate(R.routes.todoDetail, {
                                id: item.id
                            })}
                            onDeleteItem={() => deleteTodoItem(item.id)} />
                    );
                }}
            />
            <FAB onClick={() => {
                console.log('click');
                navigation.navigate(R.routes.createToDo)
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default TodoListForm;