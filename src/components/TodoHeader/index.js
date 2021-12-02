// IMPORT
import React from "react";
import './TodoHeader.css';
import background from '../../images/header-background.jpg';
import logo from '../../images/logo.png';

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
function TodoHeader ({ languageShifter, todoCounter }) {
    return (
        <div className="header">
            <img className="header-background" src={content.background.url} alt={content.background.alt} />
            <div className="header-container">
                <div className="header-language-shifter">{ languageShifter }</div>
                <div className="header-content">
                    <img className="header-logo" src={content.logo.url} alt={content.logo.alt} />
                    {/* <TodoCounter /> */}
                    <div className="header-todo-counter">{ todoCounter }</div>
                </div>
            </div>
        </div>
    );
}

export { TodoHeader };