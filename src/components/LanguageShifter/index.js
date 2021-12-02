import React from "react";
import './LanguageShifter.css';

function LanguageShifter({ languageSupport, saveLanguage }) {

    const onChangeLanguage = () => {
        saveLanguage();
    }

    return (
        <button className="language-shifter-button"
        onClick={onChangeLanguage}>{languageSupport.text}</button>
    );
}

export { LanguageShifter };