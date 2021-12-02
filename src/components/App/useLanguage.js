import React from "react";
import { languageSupportContent } from "../../content/languageSupportContent";

function useLanguage() {
    const [language, setLanguage] = React.useState(0); // TRUE is English / FALSE is Spanish

    // Saving and retrieving language in local storage
    const localStorageLanguageKey = 'tapp-todos-language';

    React.useEffect(() => {
        const localStorageLanguage = localStorage.getItem(localStorageLanguageKey);

        if (!localStorageLanguage) {
            localStorage.setItem(localStorageLanguageKey, JSON.stringify(language));
            setLanguage(language);
        } else {
            setLanguage(JSON.parse(localStorageLanguage));
        }
    })

    const saveLanguage = () => {
        const languages = Object.keys(languageSupportContent);
        let newLanguage = language;

        console.log("newLanguage " + newLanguage);
        console.log("languages " + languages);

        (language < languages.length - 1) ?
            newLanguage = language + 1 :
            newLanguage = 0;

        console.log("newLanguage " + newLanguage);

        const stringifiedLanguage = JSON.stringify(newLanguage);
        localStorage.setItem(localStorageLanguageKey, stringifiedLanguage);
        setLanguage(newLanguage);
    }

    const actualLanguage = Object.keys(languageSupportContent)[language];

    return {
        actualLanguage,
        saveLanguage,
    }
}

export { useLanguage };