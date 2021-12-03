import React from "react";
import './LanguageShifter.css';

function LanguageShifter({ languageSupport, saveLanguage }) {

    const textContent = languageSupport.LanguageShifter;

    const onChangeLanguage = () => {
        saveLanguage();
    }

    return (
        <button className="language-shifter-button"
        onClick={onChangeLanguage}>{textContent.text}</button>
    );
}

export { LanguageShifter };