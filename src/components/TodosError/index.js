import React from "react";

function TodosError({ error, languageSupport }) {

    const textContent = languageSupport.TodosError;

    return (
        <p>
            {textContent.one}
        </p>
    );
}

export { TodosError };