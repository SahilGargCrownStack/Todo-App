import createDataContext from './createDataContext';
import { AsyncStorage } from 'react-native';
import { AsyncStorageKeys } from '../utils/AppConstants';
import R from 'res/R';

const TYPE_GET_TODO_LIST = "getToDoList";
const TYPE_GET_APP_LANGUAGE_CODE = "getAppLanguageCode";

const todoReducer = (state, action) => {
    switch (action.type) {
        case TYPE_GET_APP_LANGUAGE_CODE:
            return { ...state, appLanguageCode: action.payload.appLanguageCode };
        case TYPE_GET_TODO_LIST:
            return { ...state, todoList: action.payload.todoList };
        default:
            return state;
    }
};

const getAsyncTodoList = async () => {
    const todoListString = await AsyncStorage.getItem(AsyncStorageKeys.TODO_LIST);
    let todoList = [];
    if (todoListString) {
        todoList = JSON.parse(todoListString);
    }
    return todoList;
};

const saveAsyncTodoList = async (todoList) => {
    let todoListString = JSON.stringify(todoList);
    await AsyncStorage.setItem(AsyncStorageKeys.TODO_LIST, todoListString);
};

const getTodoList = (dispatch) => {
    return async () => {
        const todoList = await getAsyncTodoList();
        dispatch({ type: TYPE_GET_TODO_LIST, payload: { todoList } });
    }
};

const addTodoItem = (dispatch) => {
    return async (todoItem, callback) => {
        const todoList = await getAsyncTodoList();
        todoList.push(todoItem);

        await saveAsyncTodoList(todoList);
        dispatch({ type: TYPE_GET_TODO_LIST, payload: { todoList } });

        if (callback)
            callback();
    }
};

const updateTodoItem = (dispatch) => {
    return async (todoItem, callback) => {
        const todoList = await getAsyncTodoList();

        const updatedTodoItemList = todoList.map((item) => {
            if (item.id === todoItem.id) {
                return todoItem
            } else {
                return item;
            }
        });

        await saveAsyncTodoList(updatedTodoItemList);
        dispatch({ type: TYPE_GET_TODO_LIST, payload: { todoList: updatedTodoItemList } });
        if (callback)
            callback();
    }
};

const deleteTodoItem = (dispatch) => {
    return async (itemId, callback) => {
        const todoList = await getAsyncTodoList();
        let newTodoList = todoList.filter((todoItem) => {
            return todoItem.id !== itemId;
        });

        await saveAsyncTodoList(newTodoList);
        dispatch({ type: TYPE_GET_TODO_LIST, payload: { todoList: newTodoList } });

        if (callback)
            callback();
    }
};

const getAppLanguageCode = (dispatch) => {
    return async () => {
        let appLanguageCode = await AsyncStorage.getItem(AsyncStorageKeys.SELECTED_LANGUAGE);
        if (!appLanguageCode) {
            appLanguageCode = "en";
            await AsyncStorage.setItem(AsyncStorageKeys.SELECTED_LANGUAGE, appLanguageCode);
        }

        R.strings.setLanguage(appLanguageCode);

        dispatch({ type: TYPE_GET_APP_LANGUAGE_CODE, payload: { appLanguageCode } });
    }
};

const setAppLanguageCode = (dispatch) => {
    return async (selectedlanguageCode) => {
        // Save Language Code locally
        await AsyncStorage.setItem(AsyncStorageKeys.SELECTED_LANGUAGE, selectedlanguageCode);

        // Set Language locally
        R.strings.setLanguage(selectedlanguageCode);

        dispatch({ type: TYPE_GET_APP_LANGUAGE_CODE, payload: { appLanguageCode: selectedlanguageCode } });
    }
};

export const { Context, Provider } = createDataContext(
    todoReducer,
    { getTodoList, addTodoItem, updateTodoItem, deleteTodoItem, getAppLanguageCode, setAppLanguageCode },
    { todoList: [], selectedTodoItem: null, appLanguageCode: '' }
);