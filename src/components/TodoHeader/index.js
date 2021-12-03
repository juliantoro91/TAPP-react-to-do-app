// IMPORT
import React from "react";
import './TodoHeader.css';
import background from '../../images/header-background.jpg';
import logo from '../../images/logo.png';
import react from "react";

// CONTENT 
const content = {
    background: {
        url: background,
        alt: 'A colored brain as background',
    },
    logo: {
        url: logo,
        alt: 'Tapp - Todo App Logo',
    },
}

// COMPONENT
function TodoHeader ({ loading, languageShifter, todoCounter, languageSupport }) {
    return (
        <div className="header">
            <img className="header-background" src={content.background.url} alt={content.background.alt} />
            <div className="header-container">
                <div className="header-language-shifter">{ react.cloneElement(languageShifter, { languageSupport }) }</div>
                <div className="header-content">
                    <img className="header-logo" src={content.logo.url} alt={content.logo.alt} />
                    {/* <TodoCounter /> */}
                    <div className="header-todo-counter">{ react.cloneElement(todoCounter, { loading, languageSupport }) }</div>
                </div>
            </div>
        </div>
    );
}

export { TodoHeader };