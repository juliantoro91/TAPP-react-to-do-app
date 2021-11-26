import React from "react";
import { CurvedContainer } from "./CurvedContainer";
import '../styles/TodoSearch.css';
import icon from "../images/search-icon.png";

const content = {
    heightFactor: 237/750,
    //heightFactor: 'auto',
    icon: {
        url: icon,
        alt: 'Search icon to search your card',
    },
    input: {
        placeholder: 'Search card...',
    },
}

function TodoSearch() {
    return (
        <CurvedContainer heightFactor={content.heightFactor}>
            <div className="todo-search">
                <img src={content.icon.url} alt={content.icon.alt} />
                <input placeholder={content.input.placeholder} />
            </div>
        </CurvedContainer>
    );
}

export { TodoSearch };