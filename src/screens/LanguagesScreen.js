import React, { useEffect, useCallback, useRef, useContext } from 'react';
import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import R from 'res/R';
import Header from '../components/Header';
import LanguageListItem from '../components/LanguageListItem';
import { Context as TodoContext } from '../context/TodoContext';

const LanguagesScreen = ({ route, navigation }) => {
    const { state, setAppLanguageCode } = useContext(TodoContext);
    let languages = useRef([])

    useEffect(() => {
        // Create Languages Array
        for (let index = 0; index < R.stringArray.language_codes.length; index++) {
            const languageCode = R.stringArray.language_codes[index];
            const languageName = R.stringArray.language_names[index];
            languages.current.push({ languageCode, languageName })
        }
    }, []);

    const updateAppLanguage = useCallback(async (languageCode) => {
        setAppLanguageCode(languageCode);
    }, [state]);


    return (
        <SafeAreaView style={styles.container} >
            <Header
                title={R.strings.change_language}
                showBackButton={true} />
            <FlatList
                data={languages.current}
                keyExtractor={(item) => item.languageCode}
                renderItem={({ item }) => {
                    return (
                        <LanguageListItem
                            selectedLanguage={state.appLanguageCode}
                            languageDetail={item}
                            onItemClick={() => {
                                updateAppLanguage(item.languageCode);
                            }} />
                    );
                }}
            />
        </SafeAreaView>
    );
}

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

export default LanguagesScreen;