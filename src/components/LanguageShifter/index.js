import React from "react";
import './LanguageShifter.css';

function LanguageShifter({ language, saveLanguage }) {

    const onChangeLanguage = () => {
        saveLanguage(prevState => !prevState);
    }

    const setLanguageText = () => {
        if (language) {
            return "Spanish";
        } else {
            return "English";
        }
    }

    return (
        <button className="language-shifter-button"
        onClick={onChangeLanguage}>{setLanguageText()}</button>
    );
}

export { LanguageShifter };