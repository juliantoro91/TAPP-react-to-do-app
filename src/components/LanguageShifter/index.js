import React from "react";
import { TodoContext } from "../TodoContext";
import './LanguageShifter.css';

function LanguageShifter() {
    const { language,
        setLanguage } = React.useContext(TodoContext);

    
    const onChangeLanguage = () => {
        setLanguage(prevState => !prevState);
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