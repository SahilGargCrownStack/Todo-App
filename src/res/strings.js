import LocalizedStrings from "react-native-localization";

// const strings = {
//     routes: {
//         "splash": "Splash",
//         "home": "Home",
//         "main": "Main",
//         "languages": "Languages"
//     },
//     "change_language": "Change Language"
// }

const strings = new LocalizedStrings({
    en: require("./translations/en.json"),
    fr: require("./translations/fr.json"),
    ar: require("./translations/ar.json"),
});

export const routes = {
    "splash": "Splash",
    "home": "Home",
    "main": "Main",
    "languages": "Languages",
    "createToDo": "CreateToDo",
    "todoDetail": "ToDoDetail",
    "editToDo": "EditToDo",
}

export const stringArray = {
    language_codes: ["en", "fr", "ar"],
    language_names: ["English", "French", "Arabic"]
}

export default strings;