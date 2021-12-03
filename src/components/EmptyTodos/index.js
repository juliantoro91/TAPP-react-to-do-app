import React from "react";

function EmptyTodos({ languageSupport }) {

    const textContent = languageSupport.EmptyTodos;

    return (
        <p>
            {textContent.one}
        </p>
    );
}

export { EmptyTodos };