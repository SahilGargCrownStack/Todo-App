import React, { useState, useCallback } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import R from 'res/R';
import Button from './Button';

const TodoForm = ({ type, initialValues, onSubmit }) => {
    // type === 'create' || 'edit'
    const [title, setTitle] = useState(initialValues.title);
    const [note, setNote] = useState(initialValues.note);

    const getSubmitButtonText = useCallback(() => {
        return type === 'create' ? R.strings.save : R.strings.update;
    }, [type]);

    return (
        <View style={styles.container} >
            <TextInput
                value={title}
                onChangeText={(text) => setTitle(text)}
                autoCapitalize='sentences'
                autoCorrect={false}
                placeholder={R.strings.title}
                style={styles.inputStyle} />

            <TextInput
                value={note}
                onChangeText={(text) => setNote(text)}
                autoCapitalize='sentences'
                autoCorrect={false}
                multiline={true}
                numberOfLines={3}
                placeholder={R.strings.note}
                style={styles.bigInputStyle} />
            <Button
                style={{ marginTop: 20 }}
                title={getSubmitButtonText()}
                isEnabled={title && note}
                onClick={() => onSubmit(title, note)}
            />
        </View>
    );
};

// TodoForm.defaultProps = {
//     initialValues: { title: '', note: '' }
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    inputStyle: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 12,
        fontSize: 16,
    },
    bigInputStyle: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 12,
        fontSize: 16,
        marginTop: 12,
        paddingTop: 12,
        maxHeight: 150

    }
});

export default TodoForm;