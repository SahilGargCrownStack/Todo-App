import React, { useContext } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import R from 'res/R';
import TodoForm from '../components/TodoForm';
import { Context as TodoContext } from '../context/TodoContext';

const CreateToDoScreen = ({ navigation }) => {
    const { addTodoItem } = useContext(TodoContext);

    return (
        <SafeAreaView style={styles.container} >
            <Header
                title={R.strings.create_todo}
                showBackButton={true} />
            <View style={styles.container} >
                <TodoForm
                    type='create'
                    initialValues={{ title: '', note: '' }}
                    onSubmit={(title, note) => {
                        let todoItem = { id: new Date().getTime(), title, note };
                        addTodoItem(todoItem, () => {
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

export default CreateToDoScreen;