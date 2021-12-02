import React from "react";

function useLanguage() {
    const [language, setLanguage] = React.useState(true); // TRUE is English / FALSE is Spanish

    // Saving and retrieving language in local storage
    const localStorageLanguageKey = 'tapp-todos-language';

    const localStorageLanguage = localStorage.getItem(localStorageLanguageKey);

    if (!localStorageLanguage) {
        localStorage.setItem(localStorageLanguageKey, JSON.stringify(true));
        setLanguage(true);
    } else {
        setLanguage(JSON.parse(localStorageLanguage));
    }

    const saveLanguage = (newLanguage) => {
        const stringifiedLanguage = JSON.stringify(newLanguage);
        localStorageLanguage.setItem(localStorageLanguageKey, stringifiedLanguage);
        setLanguage(newLanguage);
    }

    return {
        language,
        saveLanguage,
    }
}

export { useLanguage };