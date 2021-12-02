import React from "react";

function EmptyTodos({ languageSupport }) {
    return (
        <p>
            {languageSupport.one}
        </p>
    );
}

export { EmptyTodos };